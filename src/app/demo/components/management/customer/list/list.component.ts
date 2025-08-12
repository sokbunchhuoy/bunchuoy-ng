import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  customer: any = [];
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private service: CustomerService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.get().subscribe(
      (res) => {
        this.customer = res;
      },
      (error) => {
        if (error.message.includes('500')) {
          // Handle 500 error specifically if you want
          this.messageService.add({ severity: 'error', summary: 'Server Error', detail: 'Sorry, something went wrong on the server.', life: 5000 });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 5000 });
        }
      }
    );
  }

  delete(id: number) {
    this.service.deleteCustomer(id).subscribe(
      (res) => {
        this.getAll();  // Refresh the list after deletion
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000 });
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 5000 });
      }
    );
  }

  deleteCustomerId(customer: any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${customer.name}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(customer.id);
      }
    });
  }
}
