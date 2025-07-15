import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pms';
  form: FormGroup
  constructor() {
    this.form = new FormGroup({
      contacts: new FormArray([
        new FormControl('')
      ])
    })
  }
  removeContact(index: number): void {
    if (this.contacts.length > 1) {
      this.contacts.removeAt(index)
    }

  }
  addContacts(): void {
    this.contacts.push(new FormControl(''))
  }
  get contacts(): FormArray {

    
    return this.form.get('contacts') as FormArray;
  }
}
