import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrl: './dynamics.component.scss'
})
export class DynamicsComponent {

  items: any[] = [];
  selectedItem: any;
  displayDialog: boolean = false;
  isEditMode: boolean = false;

  constructor(private dataService: DataService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getAll().subscribe((data) => (this.items = data));
  }

  addItem() {
    this.selectedItem = {};
    this.isEditMode = false;
    this.displayDialog = true;
  }

  editItem(item: any) {
    this.selectedItem = { ...item };
    this.isEditMode = true;
    this.displayDialog = true;
  }

  saveItem() {
    if (this.isEditMode) {
      this.dataService.update(this.selectedItem.id, this.selectedItem).subscribe(() => {
        this.loadData();
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Item updated successfully' });
      });
    } else {
      this.dataService.create(this.selectedItem).subscribe(() => {
        this.loadData();
        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Item created successfully' });
      });
    }
    this.displayDialog = false;
  }

  deleteItem(item: any) {
    this.dataService.delete(item.id).subscribe(() => {
      this.loadData();
      this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Item deleted successfully' });
    });
  }
}
