import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
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

 onSubmit() {
   const { emailjsServiceId, emailjsTemplateId, emailjsPublicKey } = environment;

    emailjs.send(
      emailjsServiceId,
      emailjsTemplateId,
      {
        from_name: this.formData.name,
        reply_to: this.formData.email,
        message: this.formData.message
      },
      emailjsPublicKey
    ).then((result: EmailJSResponseStatus) => {
      console.log('SUCCESS!', result.text);
      alert('✅ Message sent successfully!');
      this.formData = { name: '', email: '', message: '' };
    }, (error) => {
      console.error('FAILED...', error.text);
      alert('❌ Failed to send message. Please try again.');
    });
  }
}
