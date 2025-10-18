import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;
  alertMessage = '';
  alertType: 'success' | 'error' | '' = '';
  isSubmitting = false;

  onSubmit() {
    const { emailjsServiceId, emailjsTemplateId, emailjsPublicKey } = environment;
 if (this.isSubmitting) return;
    this.isSubmitting = true;
    emailjs.send(
      emailjsServiceId,
      emailjsTemplateId,
      {
        from_name: this.formData.name,
        reply_to: this.formData.email,
        message: this.formData.message
      },
      emailjsPublicKey
    ).then(() => {
      this.alertMessage = '✅ Message sent successfully!';
      this.alertType = 'success';
      this.formData = { name: '', email: '', message: '' };
      this.clearAlert();
    }, () => {
      this.alertMessage = '❌ Failed to send message. Please try again.';
      this.alertType = 'error';
      this.clearAlert();

    }).finally(() => {
      this.isSubmitting = false;
    });
  }

  clearAlert() {
    setTimeout(() => {
      this.alertMessage = '';
      this.alertType = '';
    }, 5000);
  }
}
