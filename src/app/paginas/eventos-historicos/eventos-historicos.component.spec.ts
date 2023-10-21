import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosHistoricosComponent } from './eventos-historicos.component';

describe('EventosHistoricosComponent', () => {
  let component: EventosHistoricosComponent;
  let fixture: ComponentFixture<EventosHistoricosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosHistoricosComponent]
    });
    fixture = TestBed.createComponent(EventosHistoricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
