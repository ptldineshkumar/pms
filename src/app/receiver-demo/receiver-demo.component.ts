import { Component } from '@angular/core';

@Component({
  selector: 'app-receiver-demo',
  imports: [],
  templateUrl: './receiver-demo.component.html',
  styleUrl: './receiver-demo.component.scss'
})
export class ReceiverDemoComponent {
  receiveObject = {
    name: "Dk",
    age: "27",
    gender: "Male",
    payment:"Cash",
    TermsCondition:"true"
  }
}
