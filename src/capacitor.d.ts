
// This file provides TypeScript definitions for Capacitor plugins.
// It ensures that calls to Capacitor's native functions are type-safe
// and prevents compiler errors, especially in environments without
// full node_modules access for type inference.

declare module '@capacitor/core' {
  export const Capacitor: {
    isNativePlatform(): boolean;
    getPlatform(): 'ios' | 'android' | 'web';
  };
}


declare module '@capacitor/app' {
  /**
   * The listener handle returned by `addListener`.
   */
  interface PluginListenerHandle {
    /**
     * Remove the listener.
     */
    remove(): Promise<void>;
  }

  /**
   * Represents the data passed to the `backButton` event listener.
   */
  interface BackButtonListenerEvent {
    /**
     * On Android, if the hardware back button is pressed, you can see if the
     * web view can go back.
     */
    canGoBack: boolean;
  }

  interface AppPlugin {
    /**
     * Exits the app. This should only be used in scenarios where the app is expected to close.
     * This is only available on Android.
     */
    exitApp(): Promise<void>;

    /**
     * Listen for the hardware back button event.
     * This is only available on Android.
     *
     * @param eventName The event to listen for ('backButton')
     * @param listenerFunc The function to execute when the event is triggered
     */
    addListener(
      eventName: 'backButton',
      listenerFunc: (event: BackButtonListenerEvent) => void,
    ): Promise<PluginListenerHandle> & PluginListenerHandle;
  }

  /**
   * A global constant holding the App plugin instance.
   */
  export const App: AppPlugin;
}
