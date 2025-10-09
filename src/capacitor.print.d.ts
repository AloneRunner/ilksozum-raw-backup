// src/capacitor.print.d.ts
declare module '@capacitor/print' {
  export interface PrintOptions {
    html: string;
    jobName?: string;
  }

  export interface PrintPlugin {
    print(options: PrintOptions): Promise<{ completed: boolean }>;
  }

  export const Print: PrintPlugin;
}
