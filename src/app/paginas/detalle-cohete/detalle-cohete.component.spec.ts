import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCoheteComponent } from './detalle-cohete.component';

describe('DetalleCoheteComponent', () => {
  let component: DetalleCoheteComponent;
  let fixture: ComponentFixture<DetalleCoheteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCoheteComponent]
    });
    fixture = TestBed.createComponent(DetalleCoheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
