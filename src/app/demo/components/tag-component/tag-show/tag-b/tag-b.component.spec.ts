import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagBComponent } from './tag-b.component';

describe('TagBComponent', () => {
  let component: TagBComponent;
  let fixture: ComponentFixture<TagBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
