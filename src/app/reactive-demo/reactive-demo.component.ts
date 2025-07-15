import { Component } from '@angular/core';
import { ReceiverDemoComponent } from "../receiver-demo/receiver-demo.component";

@Component({
  selector: 'app-reactive-demo',
  imports: [ReceiverDemoComponent],
  templateUrl: './reactive-demo.component.html',
  styleUrl: './reactive-demo.component.scss'
})
export class ReactiveDemoComponent {

}
