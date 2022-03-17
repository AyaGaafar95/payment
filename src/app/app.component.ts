import { Component } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'payment-with-Stripe';
  constructor() {
    render({
      id: '#payments',
      currency: 'USD',
      value: '100.00',
      onApprove: (details) => {
        alert('transaction successfull');
      },
    });
  }
}
