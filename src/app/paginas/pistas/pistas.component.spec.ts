import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PistasComponent } from './pistas.component';

describe('PistasComponent', () => {
  let component: PistasComponent;
  let fixture: ComponentFixture<PistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PistasComponent]
    });
    fixture = TestBed.createComponent(PistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
