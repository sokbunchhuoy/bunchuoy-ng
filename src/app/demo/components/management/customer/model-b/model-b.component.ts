import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-b',
  templateUrl: './model-b.component.html',
  styleUrl: './model-b.component.scss'
})
export class ModelBComponent implements OnInit {
  f: FormGroup;
  data = {
    result: {
      supportedModels: [
        {
          id: 7,
          code: '74',
          name: 'Lenovo',
          batchList: [
            { modelId: 7, batch: 'DF' },
            { modelId: 7, batch: 'EE' }
          ]
        },
        {
          id: 10,
          code: '35',
          name: 'Angkor Beer',
          batchList: []
        },
        {
          id: 16,
          code: '36',
          name: 'bunchhuoy',
          batchList: []
        },
        {
          id: 17,
          code: '22',
          name: 'bunchhuoy',
          batchList: []
        },
        {
          id: 20,
          code: '12',
          name: 'Angkor Beer',
          batchList: [{ modelId: 20, batch: '34' }]
        }
      ]
    }
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.f = this.fb.group({
      id: [null],
      modelId: [null, Validators.required],
      batchList: [null],


    });
  }

  selectedModels: any[] = [];
  selectedBatches: any[] = [];
}
