import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { HomeBannerComponent } from '../home-banner/home-banner.component';

@Component({
  imports:[HomeBannerComponent],
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
