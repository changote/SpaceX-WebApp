import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDatalladoComponent } from './core-datallado.component';

describe('CoreDatalladoComponent', () => {
  let component: CoreDatalladoComponent;
  let fixture: ComponentFixture<CoreDatalladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreDatalladoComponent]
    });
    fixture = TestBed.createComponent(CoreDatalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
