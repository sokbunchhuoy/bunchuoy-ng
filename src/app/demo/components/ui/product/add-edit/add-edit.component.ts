import { Component, OnInit } from '@angular/core';
import { Product } from "../../../../../model/product.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "../../../../../service/product.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

@Component({
    selector: 'app-add-edit',
    templateUrl: './add-edit.component.html',
    styleUrl: './add-edit.component.scss',
    providers: [MessageService]
})
export class AddEditComponent implements OnInit {
    form: FormGroup;
    constructor(private messageService: MessageService,
        private router: Router,
        private service: ProductService) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
            qty: new FormControl('', Validators.required),
            branch: new FormControl('')
        }
        );
    }

    SaveData() {
        this.service.saveData(this.form.value).subscribe((res) => {

            setTimeout(() => {
                this.router.navigate(["/admin/ui/product"]).then();
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data deleted successfully' });
            }, 200);
            this.form.reset();

        })

    }

}
