import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PistaComponent } from './pista.component';

describe('PistaComponent', () => {
  let component: PistaComponent;
  let fixture: ComponentFixture<PistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PistaComponent]
    });
    fixture = TestBed.createComponent(PistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
