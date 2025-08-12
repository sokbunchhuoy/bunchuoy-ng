import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBComponent } from './model-b.component';

describe('ModelBComponent', () => {
  let component: ModelBComponent;
  let fixture: ComponentFixture<ModelBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
