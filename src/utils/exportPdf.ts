// src/utils/exportPdf.ts
import { t, getCurrentLanguage } from '../i18n/index.ts';

export async function exportPrintAreaToPdf() {
  // Use a try-catch in case @capacitor/core is not available in a pure web environment
  let isNative = false;
  try {
    const { Capacitor } = await import('@capacitor/core');
    isNative = Capacitor.isNativePlatform();
  } catch (e) {
    isNative = false;
  }

  if (isNative) {
    try {
      // Hide the module name from Vite's static analysis using a variable and a vite-ignore comment
      const printPlugin = '@capacitor/print';
      const { Print } = await import(/* @vite-ignore */ printPlugin);

      const printContent = document.getElementById('rapor-alani');
      if (!printContent) {
        console.error('#rapor-alani elementi bulunamadı.');
        return;
      }

      const fullHtml = `
        <!DOCTYPE html>
        <html lang="${getCurrentLanguage()}">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${t('app.printPreview')}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./index.css">
            <style>
              body {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                background-color: white !important;
              }
            </style>
          </head>
          <body>
            ${printContent.outerHTML}
          </body>
        </html>`;
      
      await Print.print({ html: fullHtml, jobName: t('app.pdfJobName') });
    } catch (e) {
      console.error('Capacitor Print plugin failed to load. Falling back to web print.', e);
      window.print();
    }
  } else {
    // Web platform
    window.print();
  }
}

// New: Save the print area directly as a PDF file. On native, writes to device storage; on web, triggers a download.
export async function savePrintAreaAsPdf(fileBaseName: string = 'IlkSozum-Kartlar') {
  const container = document.getElementById('rapor-alani');
  if (!container) {
    console.error('#rapor-alani elementi bulunamadı.');
    throw new Error('Rapor alanı bulunamadı');
  }

  // Lazy import to keep initial bundle small
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ]);

  // Render the container to canvas at higher scale for better quality
  const canvas = await html2canvas(container as HTMLElement, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
  });

  const imgData = canvas.toDataURL('image/jpeg', 0.95);

  // A4 in mm: 210 x 297. We'll build multi-page if content is taller than a single page in mm.
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  // Convert canvas pixel sizes to mm for the PDF
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const pxPerMm = canvas.width / (pageWidth);
  const imgWidthMm = pageWidth; // fill width
  const imgHeightMm = canvas.height / pxPerMm;

  // Note: We'll slice content into pages if necessary; no need to track Y offsets here.

  // If the content is longer than a page, we slice vertically by drawing the same image offset per page
  // We'll draw using addImage with a clip by translating the y position
  // jsPDF doesn't support direct crop regions for images, so we render page by page using the same image and negative y translation via addImage options.
  // Simplify: if height fits on one page, just add once; otherwise, draw multiple pages by partial canvas per page using temporary canvases.

  if (imgHeightMm <= pageHeight) {
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidthMm, imgHeightMm, undefined, 'FAST');
  } else {
    // Create a temporary canvas to slice the big canvas into page-height chunks in pixel units
    const pageHeightPx = Math.floor(pageHeight * pxPerMm);
    const sliceCanvas = document.createElement('canvas');
    sliceCanvas.width = canvas.width;
    sliceCanvas.height = pageHeightPx;
    const sliceCtx = sliceCanvas.getContext('2d');
    if (!sliceCtx) throw new Error('Canvas context alınamadı');

    let rendered = 0;
    while (rendered < canvas.height) {
      if (rendered > 0) pdf.addPage();
      const sliceHeight = Math.min(pageHeightPx, canvas.height - rendered);
      sliceCanvas.height = sliceHeight; // adjust last page height
      sliceCtx.clearRect(0, 0, sliceCanvas.width, sliceCanvas.height);
      sliceCtx.drawImage(
        canvas,
        0,
        rendered,
        canvas.width,
        sliceHeight,
        0,
        0,
        sliceCanvas.width,
        sliceHeight
      );
      const sliceImg = sliceCanvas.toDataURL('image/jpeg', 0.95);
      const sliceHeightMm = sliceHeight / pxPerMm;
      pdf.addImage(sliceImg, 'JPEG', 0, 0, pageWidth, sliceHeightMm, undefined, 'FAST');
      rendered += sliceHeight;
    }
  }

  const pdfBlob = pdf.output('blob');
  const fileName = `${fileBaseName}.pdf`;

  // Determine platform
  let isNative = false;
  try {
    const { Capacitor } = await import('@capacitor/core');
    isNative = Capacitor.isNativePlatform();
  } catch {
    isNative = false;
  }

  if (isNative) {
    // Save using Capacitor Filesystem, then optionally share
    const fsMod = '@capacitor/filesystem';
    const shareMod = '@capacitor/share';
    const [{ Filesystem, Directory }, { Share }] = await Promise.all([
      import(/* @vite-ignore */ fsMod),
      import(/* @vite-ignore */ shareMod).catch(() => ({ Share: undefined as any })),
    ]);

    // Convert Blob to base64
    const base64Data = await blobToBase64(pdfBlob);

    const { uri } = await Filesystem.writeFile({
      path: `IlkSozum/${fileName}`,
      data: base64Data,
      directory: Directory.Documents,
      recursive: true,
      encoding: 'base64',
    });

    // Try share sheet if available
    try {
      if (Share && typeof Share.share === 'function') {
        await Share.share({
          title: t('app.shareTitle'),
          text: t('app.shareText'),
          url: uri,
          dialogTitle: t('app.shareDialogTitle'),
        });
      }
    } catch (e) {
      console.warn('Share başarısız veya iptal edildi:', e);
    }

    return uri; // return native file uri
  } else {
    // Web: trigger a download
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    return fileName;
  }
}

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1] || '';
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}