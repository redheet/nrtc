import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }
  public formResponse;
  public formStatus;
  public sendEmail(e: Event) {
    e.preventDefault();
    var contactForm = <HTMLFormElement>document.getElementById('contact-form');
    emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target as HTMLFormElement, 'user_XWPdjpTv0DgrQb9FN3tWr')
      .then((result: EmailJSResponseStatus) => {
        //reset here
        contactForm.reset();
        this.formStatus = 'success';
        this.formResponse = 'Your message has been sent successfully, we will get back to you shortly.';
      }, (error) => {
        this.formStatus = 'danger';
        this.formResponse = 'There was an error submitting your form.';
      });
  }

  ngOnInit(): void {
  }

}
