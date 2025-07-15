import { Component } from '@angular/core';
import { ReactiveDemoComponent } from "../reactive-demo/reactive-demo.component";
import { ReceiverDemoComponent } from "../receiver-demo/receiver-demo.component";

@Component({
  selector: 'app-reacter',
  imports: [ReactiveDemoComponent, ReceiverDemoComponent],
  templateUrl: './reacter.component.html',
  styleUrl: './reacter.component.scss'
})
export class ReacterComponent {

}
