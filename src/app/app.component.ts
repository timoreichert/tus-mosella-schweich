import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { filter } from 'rxjs/operators';

import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


export interface Device { token: string; }


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }, {
      title: 'News',
      url: '/news',
      icon: 'list'
    }, {
      title: 'Social Hub',
      url: '/social',
      icon: 'share'
    }, {
      title: 'Fanshop',
      url: '/fanshop',
      icon: 'basket'
    }, {
      title: 'Feedback',
      url: '/feedback',
      icon: 'mail'
    }, {
      title: 'Kontakt',
      url: '/contact',
      icon: 'call'
    }
  ];

  private devicesCollection: AngularFirestoreCollection<Device>;

  constructor(
    afs: AngularFirestore,
    private router: Router,
    private platform: Platform,
    private toastController: ToastController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fbAnalytics: FirebaseAnalytics
  ) {
    this.devicesCollection = afs.collection<Device>('devices');
    this.initializeApp();
    this.initializeFCM();
  }

  initializeApp() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      if (this.platform.is('ios') || this.platform.is('android')) {
        this.fbAnalytics.setCurrentScreen(event.url);
        this.fbAnalytics.logEvent('page_view', {
          page: event.url,
          platform: this.platform.is('ios') ? 'ios' : 'android'
        });
      }
    });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializeFCM() {
    // if (this.platform.is('ios') || this.platform.is('android')) {
    //   this.fcm.subscribeToTopic('test');

    //   this.fcm.getToken().then(token => {
    //     this.registerToken(token);
    //   });

    //   this.fcm.onTokenRefresh().subscribe(token => {
    //     this.registerToken(token);
    //   });

    //   this.fcm.onNotification().subscribe(data => {
    //     if (data.wasTapped) {
    //       this.presentToast('Received in background ' + JSON.stringify(data));
    //     } else {
    //       this.presentToast('Received in foreground ' + JSON.stringify(data));
    //     };
    //   });
    // }
  }

  registerToken(token: string){
    this.devicesCollection.add({token: token}as Device)
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000
    });
    toast.present();
  }
}
