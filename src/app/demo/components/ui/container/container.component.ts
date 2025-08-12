import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CanComponentDeactivate } from 'src/app/guard/can-deactivate.guard';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements CanComponentDeactivate {
  hasUnsavedChanges = false;  //implements CanComponentDeactivate {


  // Initialize formData object
  formData = {
    name: '',
    email: '',
    address: ''
  };

  // Method to check if navigation can proceed
  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

  // Method to track form changes
  onFormChange() {
    this.hasUnsavedChanges = true;
  }

  // Handle form submission
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted', this.formData);
      // Reset unsaved changes flag after submission
      this.hasUnsavedChanges = false;
    }
  }
}
