// This file provides TypeScript definitions for the @capacitor/filesystem plugin.

declare module '@capacitor/filesystem' {
  
  export enum Directory {
    Documents = 'DOCUMENTS',
    Data = 'DATA',
    Cache = 'CACHE',
    External = 'EXTERNAL',
    ExternalStorage = 'EXTERNAL_STORAGE',
  }

  interface WriteFileOptions {
    path: string;
    data: string;
    directory: Directory;
    encoding?: string;
    recursive?: boolean;
  }
  
   interface GetUriOptions {
      path: string;
      directory: Directory;
  }

  interface GetUriResult {
      uri: string;
  }

  interface FilesystemPlugin {
    writeFile(options: WriteFileOptions): Promise<{ uri: string }>;
    getUri(options: GetUriOptions): Promise<GetUriResult>;
  }
  
  export const Filesystem: FilesystemPlugin;
}