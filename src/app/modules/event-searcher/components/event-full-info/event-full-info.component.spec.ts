import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFullInfoComponent } from './event-full-info.component';

describe('EventFullInfoComponent', () => {
  let component: EventFullInfoComponent;
  let fixture: ComponentFixture<EventFullInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFullInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
