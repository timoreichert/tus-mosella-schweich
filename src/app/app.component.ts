import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public version: string;
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

  constructor(
    private appVersion: AppVersion,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.appVersion.getVersionNumber()
      .then(v => this.version = v)
      .catch(() => this.version = environment.version);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
