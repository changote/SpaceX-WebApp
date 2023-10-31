import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulaDetalladoComponent } from './capsula-detallado.component';

describe('CapsulaDetalladoComponent', () => {
  let component: CapsulaDetalladoComponent;
  let fixture: ComponentFixture<CapsulaDetalladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapsulaDetalladoComponent]
    });
    fixture = TestBed.createComponent(CapsulaDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
