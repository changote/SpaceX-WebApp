import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDetalladoComponent } from './core-detallado.component';

describe('CoreDatalladoComponent', () => {
  let component: CoreDetalladoComponent;
  let fixture: ComponentFixture<CoreDetalladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreDetalladoComponent]
    });
    fixture = TestBed.createComponent(CoreDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
