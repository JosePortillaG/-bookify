import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDetailComponent } from './rec-detail.component';

describe('RecDetailComponent', () => {
  let component: RecDetailComponent;
  let fixture: ComponentFixture<RecDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
