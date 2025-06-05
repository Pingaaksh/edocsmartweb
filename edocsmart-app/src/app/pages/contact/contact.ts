import { Component, ElementRef, AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements AfterViewInit {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  @ViewChild('formCard') formCard!: ElementRef;
  @ViewChild('stopSection') stopSection!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Add a small delay to ensure DOM is fully rendered
      setTimeout(() => {
        // Store the original position of the form for reference
        const originalRect = this.formCard.nativeElement.getBoundingClientRect();
        const originalLeft = originalRect.left;
        const originalWidth = originalRect.width;
        
        // Make form sticky initially and set proper positioning
        this.formCard.nativeElement.classList.add('sticky-form');
        this.formCard.nativeElement.style.left = originalLeft + 'px';
        this.formCard.nativeElement.style.width = originalWidth + 'px';
        
        // Use IntersectionObserver to detect when testimonials section comes into view
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              // When testimonials section is visible, stop the sticky behavior
              this.formCard.nativeElement.classList.remove('sticky-form');
              this.formCard.nativeElement.classList.add('stop-sticky');
              
              // Position the form at the bottom of the previous section
              const testimonialsRect = this.stopSection.nativeElement.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const stopPosition = testimonialsRect.top + scrollTop - 100; // 100px before testimonials
              
              this.formCard.nativeElement.style.position = 'absolute';
              this.formCard.nativeElement.style.top = stopPosition + 'px';
              this.formCard.nativeElement.style.left = originalLeft + 'px';
              this.formCard.nativeElement.style.width = originalWidth + 'px';
            } else {
              // When testimonials section is not visible, keep form sticky
              this.formCard.nativeElement.classList.add('sticky-form');
              this.formCard.nativeElement.classList.remove('stop-sticky');
              
              // Reset to sticky positioning but maintain left position
              this.formCard.nativeElement.style.position = '';
              this.formCard.nativeElement.style.top = '';
              this.formCard.nativeElement.style.left = originalLeft + 'px';
              this.formCard.nativeElement.style.width = originalWidth + 'px';
            }
          },
          {
            root: null,
            threshold: 0.1, // Trigger when 10% of testimonials section is visible
            rootMargin: '-100px 0px 0px 0px' // Start transition 100px before the section
          }
        );

        observer.observe(this.stopSection.nativeElement);
      }, 100);
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    this.contactForm = { name: '', email: '', phone: '', message: '' };
  }
}
