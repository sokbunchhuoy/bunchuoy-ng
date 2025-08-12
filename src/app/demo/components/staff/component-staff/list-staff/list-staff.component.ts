import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrl: './list-staff.component.scss'
})
export class ListStaffComponent {
  form: FormGroup;
  models = [
    { id: 7, code: "74", name: "Lenovo", batchList: ["DF", "EE"] },
    { id: 10, code: "35", name: "Angkor Beer", batchList: [] },
    { id: 16, code: "36", name: "bunchhuoy", batchList: [] },
    { id: 17, code: "22", name: "bunchhuoy", batchList: [] },
    { id: 20, code: "12", name: "Angkor Beer", batchList: ["34"] }
  ];

  allChecked = false;
  selectedModels: any = {};

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      modelId: [null],
      firmwareSupportedModels: false,
      batchList: [null]
    });

    this.models.forEach(model => {
      this.selectedModels[model.code] = false;
      model.batchList.forEach(batch => {
        this.selectedModels[`${model.code}-${batch}`] = false;
      });
    });
  }

  toggleCheckAll() {
    this.allChecked = !this.allChecked;
    Object.keys(this.selectedModels).forEach(key => {
      this.selectedModels[key] = this.allChecked;
    });
  }

  toggleCheck() {
    this.allChecked = Object.values(this.selectedModels).every(value => value === true);
  }
}
