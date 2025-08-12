import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnDestroy, OnInit {

  user = {
    name: ''
  };

  ngOnInit() {
    this.user.name = 'Dara';

  }

  data = 'Initial Value';

  ngOnDestroy() {
    console.log('AppComponent ngOnDestroy called');
  }

  changeInputValue() {
    this.data = 'New Value';
  }

}
