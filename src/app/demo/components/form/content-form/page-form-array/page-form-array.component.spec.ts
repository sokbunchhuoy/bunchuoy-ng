import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormArrayComponent } from './page-form-array.component';

describe('PageFormArrayComponent', () => {
  let component: PageFormArrayComponent;
  let fixture: ComponentFixture<PageFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFormArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
