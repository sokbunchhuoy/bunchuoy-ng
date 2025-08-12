import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Branch } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss',
  providers: [MessageService]
})
export class AddEditComponent implements OnInit {

  majorOptions = Array.from({ length: 26 }, (_, i) => i); // [0, 1, ..., 25]
  minorOptions = Array.from({ length: 10 }, (_, i) => i); // [0, 1, ..., 9]

  f: FormGroup;

  constructor(private fb: FormBuilder, private service: CustomerService, private route: ActivatedRoute, private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.f = this.fb.group({
      id: [null],
      code: [null],
      name: [null],
      position: [null],
      email: [null],
      branchName: this.fb.array([this.initBranchForm({} as Branch)]),
      address: this.initAddressForm(),
      major: [null, Validators.required],
      minor: [null, Validators.required],

    });

    this.loadCustomer();
    this.f.get('major')?.valueChanges.subscribe((majorValue) => {
      this.onMajorChange(majorValue);
      this.updateCode();
    });

    this.f.get('minor')?.valueChanges.subscribe(() => {
      this.updateCode();
    });
  }

  onMajorChange(majorValue: number) {
    if (majorValue === 25) {
      this.minorOptions = Array.from({ length: 6 }, (_, i) => i);
    } else {
      this.minorOptions = Array.from({ length: 10 }, (_, i) => i);
    }
    const minorControl = this.f.get('minor');
    if (minorControl?.value > Math.max(...this.minorOptions)) {
      minorControl.setValue(null);
    }
  }
  updateCode() {
    const major = this.f.get('major')?.value;
    const minor = this.f.get('minor')?.value;
    if (major !== null && minor !== null) {
      const decimalValue = parseInt(`${major}${minor}`);
      let hexValue = decimalValue.toString(16).toUpperCase();

      // Ensure the code is always at least 2 characters
      if (hexValue.length === 1) {
        hexValue = '0' + hexValue;
      }

      this.f.get('code')?.setValue(hexValue);
    }
  }


  initBranchForm(f: Branch) {
    return this.fb.group({
      branch: [f.branch],
      type: [f.type],
      branchCode: [f.branchCode],
      category: null,

    });
  }

  initAddressForm() {
    return this.fb.group({
      streetNo: [null],
      homeNo: [null],
    });
  }

  get branchName(): FormArray {
    return this.f.get('branchName') as FormArray;
  }

  addBranch() {
    this.branchName.push(this.initBranchForm({} as Branch));
  }

  deleteBranch(index: number) {
    this.branchName.removeAt(index);
  }

  loadCustomer() {
    const customerId = this.route.snapshot.params['id'];
    if (customerId) {
      this.service.getById(customerId).subscribe(data => {

        this.f.patchValue({
          id: data.id,
          code: data.code,
          name: data.name,
          position: data.position,
          email: data.email,
        });


        this.branchName.clear();
        data.branchName.forEach(branch => {
          this.branchName.push(this.initBranchForm(branch));
        });

        this.f.get('address').patchValue(data.address);
      });
    }
  }

  onSubmit() {
    if (this.f.valid) {
      this.updateCode();
      let code = this.f.get('code')?.value;
      if (code.length === 1) {
        this.f.patchValue({ code: '0' + code });
      }
      const customer = this.f.value;

      if (customer.id) {
        // Update Customer
        this.service.update(customer.id, customer).subscribe(response => {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Updated', life: 3000 });
          setTimeout(() => {
            this.router.navigate(["/admin/kh/customer"]).then();
          }, 1000);

          console.log('Customer updated:', response);
        });
      } else {
        // Create new Customer
        this.service.create(customer).subscribe(response => {

          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Created', life: 3000 });
          setTimeout(() => {
            this.router.navigate(["/admin/kh/customer"]).then();
          }, 1000);

          console.log('Customer created:', response);
        });
      }
    }
  }


  dropdown() {

    console.log("Data Login");
    if (this.f.value) {
      this.service.create(this.addBranch).subscribe((res => {
        this.service = res;
      }));

    }

  }



}