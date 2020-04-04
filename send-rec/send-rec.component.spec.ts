import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRecComponent } from './send-rec.component';

describe('SendRecComponent', () => {
  let component: SendRecComponent;
  let fixture: ComponentFixture<SendRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
