import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guard/can-deactivate.guard';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
  styleUrl: './can-deactivate.component.scss'
})
export class CanDeactivateComponent implements OnInit, CanComponentDeactivate {
  isSaved = false;
  userDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.userDetailsForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // Detect form changes to set `isSaved` flag
    this.userDetailsForm.valueChanges.subscribe(() => {
      this.isSaved = false;  // Form has unsaved changes
    });
  }

  // Implement the canDeactivate method
  canDeactivate(): Observable<boolean> {
    if (!this.isSaved) {
      const confirmLeave = window.confirm('There are unsaved changes! Are you sure you want to leave?');
      return of(confirmLeave);
    }
    return of(true);
  }

  onSubmit() {
    this.isSaved = true;  // Form is saved
    console.log('Form submitted', this.userDetailsForm.value);
  }
}
