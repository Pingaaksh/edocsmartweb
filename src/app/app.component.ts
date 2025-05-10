import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LottieComponent } from 'ngx-lottie';

@Component({
    selector: 'app-root',
    imports: [LottieComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'edocsmartweb_App';
    options = {
        path: 'assets/animation/animation.json', // or any lottie JSON
    };
}
