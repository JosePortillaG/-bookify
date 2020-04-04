import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveRecComponent } from './give-rec.component';

describe('GiveRecComponent', () => {
  let component: GiveRecComponent;
  let fixture: ComponentFixture<GiveRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
