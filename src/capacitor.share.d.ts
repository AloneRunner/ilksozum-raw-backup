// This file provides TypeScript definitions for the @capacitor/share plugin.

declare module '@capacitor/share' {
  
  interface ShareOptions {
    title?: string;
    text?: string;
    url?: string;
    dialogTitle?: string;
  }

  interface SharePlugin {
    share(options: ShareOptions): Promise<any>;
  }
  
  export const Share: SharePlugin;
}