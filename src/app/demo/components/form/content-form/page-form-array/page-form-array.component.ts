import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-form-array',
  templateUrl: './page-form-array.component.html',
  styleUrl: './page-form-array.component.scss'
})
export class PageFormArrayComponent {
  nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  onSubmit() {
    if (this.nameControl.valid) {
      console.log('Name:', this.nameControl.value);
    } else {
      console.log('FormControl is invalid');
    }
  }

}

