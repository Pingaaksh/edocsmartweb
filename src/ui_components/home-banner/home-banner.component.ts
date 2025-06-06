import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-home-banner',
  imports: [LottieComponent],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent {
options = {
        path: 'assets/animation/animation.json', // or any lottie JSON
    };
}
