import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConpontFormComponent } from './conpont-form.component';

describe('ConpontFormComponent', () => {
  let component: ConpontFormComponent;
  let fixture: ComponentFixture<ConpontFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConpontFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConpontFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
