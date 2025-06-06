import { Routes } from '@angular/router';
import { LandingPageComponent } from '../ui_components/landing-page/landing-page.component';
import { ContactPageComponent } from '../ui_components/contact-page/contact-page.component';
import { PricingPageComponent } from '../ui_components/pricing-page/pricing-page.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'pricing', component:PricingPageComponent },
  { path: '**', redirectTo: '' }
];
