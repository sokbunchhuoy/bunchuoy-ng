import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentViewDemoComponent } from './content-view-demo.component';

describe('ContentViewDemoComponent', () => {
  let component: ContentViewDemoComponent;
  let fixture: ComponentFixture<ContentViewDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentViewDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
