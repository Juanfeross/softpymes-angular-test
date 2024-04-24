import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModalUpdateComponent } from './dialog-modal-update.component';

describe('DialogModalUpdateComponent', () => {
  let component: DialogModalUpdateComponent;
  let fixture: ComponentFixture<DialogModalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModalUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogModalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
