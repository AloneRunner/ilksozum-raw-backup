// Service worker registration helper
// Skip registration during local development on common dev hosts (localhost:5173, 127.0.0.1)
if ('serviceWorker' in navigator) {
  try {
    const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.port === '5173';
    if (isLocalhost) {
      console.log('[Service Worker] Skipping registration on localhost/dev environment');
    } else {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);

            // Listen for updates
            if (registration.waiting) {
              registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            }

            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (!newWorker) return;
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    console.log('New content is available; refreshing...');
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                  }
                }
              });
            });
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  } catch (e) {
    console.warn('[Service Worker] Failed to evaluate localhost guard:', e);
  }

  // Listen for messages from SW
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'RELOAD_PAGE') {
      window.location.reload();
    }
  });
}