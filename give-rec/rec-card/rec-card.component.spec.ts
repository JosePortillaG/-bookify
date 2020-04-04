import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecCardComponent } from './rec-card.component';

describe('RecCardComponent', () => {
  let component: RecCardComponent;
  let fixture: ComponentFixture<RecCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
