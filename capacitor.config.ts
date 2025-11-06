
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.omer.sesogrenme.cocuklarim',
  appName: 'İlk Sözüm: Otizm & Okul Öncesi',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    hostname: 'app.example.com'
  },

  android: {
  },
  plugins: {
    AdMob: {
      appId: "ca-app-pub-1337451525993562~6961716283",
      tagForChildDirectedTreatment: true,
      tagForUnderAgeOfConsent: true,
      maxAdContentRating: 'G',
    },
  }
};

export default config;
