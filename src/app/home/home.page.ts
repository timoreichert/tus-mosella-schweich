import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private platform: Platform,
    private videoPlayer: YoutubeVideoPlayer) {
  }

  isPortrait(): boolean  {
    return this.platform.isPortrait();
  }

  openHymne(){
    if(this.platform.is('ios') || this.platform.is('android')){
      this.videoPlayer.openVideo('FmGPWQYzDaE');
    }else{
      window.location.href = 'https://www.youtube.com/watch?v=FmGPWQYzDaE';
    }
  }
}
