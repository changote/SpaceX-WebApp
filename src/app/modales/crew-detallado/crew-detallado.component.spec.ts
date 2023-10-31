import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetalladoComponent } from './crew-detallado.component';

describe('CrewDetalladoComponent', () => {
  let component: CrewDetalladoComponent;
  let fixture: ComponentFixture<CrewDetalladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewDetalladoComponent]
    });
    fixture = TestBed.createComponent(CrewDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
