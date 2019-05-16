import { ErrorHandler } from '@angular/core';
import { FirebaseCrashlytics } from '@ionic-native/firebase-crashlytics/ngx';
import { Platform } from '@ionic/angular';

export class FirebaseCrashlyticsErrorHandler implements ErrorHandler {

    constructor(private platform: Platform,
        private fbCrashlytics: FirebaseCrashlytics) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.fbCrashlytics.initialize();
        }
    }

    handleError(error: any): void {
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.fbCrashlytics.logException(`error: ${error}`);
        } else {
            console.error(error);
        }
    }
}