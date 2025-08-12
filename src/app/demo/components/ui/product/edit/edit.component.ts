import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../../../service/product.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrl: './edit.component.scss',
    providers: [MessageService]
})
export class EditComponent implements OnInit {


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService,
        private service: ProductService) {
    }

    form = new FormGroup({
        name: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        qty: new FormControl('', Validators.required),
        branch: new FormControl('', Validators.required)
    }
    );
    ngOnInit() {
        const { id: id1 } = this.route.snapshot.params;
        this.service.getProductById(id1).subscribe((res: any) => {

            this.form = new FormGroup({
                name: new FormControl(res['name']),
                price: new FormControl(res['price']),
                qty: new FormControl(res['qty']),
                branch: new FormControl(res['branch']),
            });

        });
    }

    editData() {
        const { id: id2 } = this.route.snapshot.params;
        this.service.updateProduct(id2, this.form.value).subscribe((res: any) => {


            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data deleted successfully' });
            setTimeout(() => {
                this.router.navigate(["/admin/ui/product"]).then();
            }, 200);

            this.form.reset();
        });
    }

}
