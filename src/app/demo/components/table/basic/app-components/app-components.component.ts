import { Component } from '@angular/core';

@Component({
  selector: 'app-app-components',
  templateUrl: './app-components.component.html',
  styleUrl: './app-components.component.scss'
})
export class AppComponentsComponent {
  voucher = [
    {
      voucherId: 224,
      voucherCode: 'KOI_FIRST_PICKUP8772'
    },
    {
      voucherId: 226,
      voucherCode: 'KOI_VOUCHER_FREE_DRINK6650'
    }
  ];

  voucherCodes: string[] = [];

  getData() {
    // Clear the voucherCodes array first (in case of multiple clicks)
    this.voucherCodes = [];

    // Push voucherCode values into voucherCodes array
    this.voucher.forEach(voucher => {
      this.voucherCodes.push(voucher.voucherCode);
    });
  }
}
