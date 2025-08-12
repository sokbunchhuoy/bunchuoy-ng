import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuidCustomComponent } from './buid-custom.component';

describe('BuidCustomComponent', () => {
  let component: BuidCustomComponent;
  let fixture: ComponentFixture<BuidCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuidCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuidCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
