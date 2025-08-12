import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGetComponent } from './data-get.component';

describe('DataGetComponent', () => {
  let component: DataGetComponent;
  let fixture: ComponentFixture<DataGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
