import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  toastMessage: string = '';
  toastClass: string = ''; 

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      from_name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // Method to show the toast notification
  showToast(message: string, isSuccess: boolean) {
    this.toastMessage = message;
    this.toastClass = isSuccess ? 'toast-success' : 'toast-error';

    // Automatically hide toast after 3 seconds
    setTimeout(() => {
      this.toastMessage = '';
    }, 3000);
  }

  // Handle form submission
  onSubmit() {
    if (this.contactForm.invalid) {
      this.showToast('Please fill in both fields.', false);
      return; // Exit if form is invalid
    }

    const from_name = this.contactForm.value.from_name;
    const to_name = 'Harold Muyba';
    const message = this.contactForm.value.message;

    // Send email using EmailJS
    emailjs
      .send(
        'service_pfkqw99',
        'template_geg9dhe',
        {
          from_name: from_name,
          to_name: to_name,
          message: message,
        },
        'MbMPoN7kBTrooHTnh'
      )
      .then((response) => {
        this.showToast('Email sent successfully!', true);
      })
      .catch((error) => {
        this.showToast('Error sending email. Please try again.', false);
      });
  }
}
