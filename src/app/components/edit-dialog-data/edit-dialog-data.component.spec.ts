import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogDataComponent } from './edit-dialog-data.component';

describe('EditDialogDataComponent', () => {
  let component: EditDialogDataComponent;
  let fixture: ComponentFixture<EditDialogDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDialogDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
