import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import {LandingPageComponent} from "../ui_components/landing-page/landing-page.component";
import { HomeBannerComponent } from '../ui_components/home-banner/home-banner.component';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent,HomeBannerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'edocsmartweb_App';
    
}
 