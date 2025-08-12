import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../../../service/product.service";
import { ConfirmationService, MessageService } from "primeng/api";
declare var $: any;
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
    providers: [ConfirmationService, MessageService]
})
export class ListComponent implements OnInit {
    product: any = [];
    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
        private service: ProductService) {
    }
    ngOnInit(): void {
        this.getAllProducts();
    }

    getAllProducts() {
        this.service.getAllProduct().subscribe((res) => {
            this.product = res;
        },
            (error) => {
                console.error(error);
            });
    }

    deleteProduct(id: any) {
        this.service.delete(id).subscribe((res) => {
            this.getAllProducts();
        });
    }

    deleteProductId(product: any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleteProduct(product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    }
}
