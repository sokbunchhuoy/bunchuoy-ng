import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductFee } from 'src/app/model/category.model';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent implements OnInit {

  type = [{ type: 'Drink' }, { type: 'Water' }];
  f: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.f = this.fb.group({
      id: [null],
      code: [null, [Validators.required, Validators.minLength(4)]],
      productName: [null, Validators.required],
      productType: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      productFees: this.fb.array([this.initFeeForm({} as ProductFee)]),
      address: this.initAddressForm(), // Add the address form group

    });

  }

  initFeeForm(f: ProductFee) {
    return this.fb.group({
      id: [f.id],
      feeAmount: [f.feeAmount],
      qty: [f.qty],
      branchCode: [f.branchCode, Validators.required],
    });
  }

  get productFees(): FormArray {
    return this.f.get('productFees') as FormArray;
  }

  addFee() {
    this.productFees.push(this.initFeeForm({} as ProductFee));
  }

  deleteFee(index: number) {
    this.productFees.removeAt(index);
  }

  initAddressForm() {
    return this.fb.group({
      streetNo: [null, Validators.required],
      homeNo: [null, Validators.required],
    });
  }




  onSubmit(): void {
    if (this.f.valid) {
      console.log('Form Value:', this.f.value);
    } else {
      console.error('Form Invalid');
    }

  }


}
