import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenDialogComponent } from './imagen-dialog.component';

describe('ImagenDialogComponent', () => {
  let component: ImagenDialogComponent;
  let fixture: ComponentFixture<ImagenDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenDialogComponent]
    });
    fixture = TestBed.createComponent(ImagenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
