// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: '2.0.5',
  wordpress: {
    origin: 'https://mosella-schweich.de/',
    woocommerce: {
      consumer_key: 'ck_f70e03e79c05602deb147001441f638cc2abf680',
      consumer_secret: 'cs_06764ee41feb5032e51c3ba2eb2f352a1b18eaec'
    }
  }, firebase: {
    apiKey: 'AIzaSyA7g1skAu6ZYr4TUR-Xj6y6rgyraYToSZ8',
    authDomain: 'tus-mosella-schweich-app.firebaseapp.com',
    databaseURL: 'https://tus-mosella-schweich-app.firebaseio.com',
    projectId: 'tus-mosella-schweich-app',
    storageBucket: 'tus-mosella-schweich-app.appspot.com',
    messagingSenderId: '354919967990'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
