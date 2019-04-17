# tus-mosella-schweich
[![Build Status](https://travis-ci.org/timoreichert/tus-mosella-schweich.svg?branch=master)](https://travis-ci.org/timoreichert/tus-mosella-schweich)

Ofizielle App des TuS Mosella Schweich e.V.

## gitpod.io

serve on gitpod.io
```
ionic serve -- --disable-host-check
```


```
ionic cordova build android --prod --release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../tus-mosella-app.keystore ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk tus-mosella-app

rm ./mosella-app.apk

$ANDROID_SDK_ROOT/build-tools/28.0.3/zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./mosella-app.apk

```