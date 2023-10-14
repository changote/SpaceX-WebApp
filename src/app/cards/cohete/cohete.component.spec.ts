import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoheteComponent } from './cohete.component';

describe('CoheteComponent', () => {
  let component: CoheteComponent;
  let fixture: ComponentFixture<CoheteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoheteComponent]
    });
    fixture = TestBed.createComponent(CoheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
