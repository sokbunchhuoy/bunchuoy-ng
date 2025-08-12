import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {

  code = new FormControl('', [Validators.required, Validators.minLength(3)]);

  onSubmit() {
    if (this.code.valid) {
      console.log('Code:', this.code.value);
    } else {
      console.log('FormControl is invalid');
    }
  }

}
