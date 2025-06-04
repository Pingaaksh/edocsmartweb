import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    
    alert('Thank you for your message! We will get back to you soon.');
    
    
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
