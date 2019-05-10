import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public version: string;

  constructor(private platform: Platform,
    private appVersion: AppVersion,
    private videoPlayer: YoutubeVideoPlayer) {
    this.appVersion.getVersionNumber()
      .then(v => this.version = v)
      .catch(() => this.version = environment.version);
  }

  isPortrait(): boolean {
    return this.platform.isPortrait();
  }

  openHymne() {
    if (this.platform.is('ios') || this.platform.is('android')) {
      this.videoPlayer.openVideo('FmGPWQYzDaE');
    } else {
      window.location.href = 'https://www.youtube.com/watch?v=FmGPWQYzDaE';
    }
  }
}
