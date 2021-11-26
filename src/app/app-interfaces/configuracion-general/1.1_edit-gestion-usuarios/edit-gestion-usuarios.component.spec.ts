import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGestionUsuariosComponent } from './edit-gestion-usuarios.component';

describe('EditGestionUsuariosComponent', () => {
  let component: EditGestionUsuariosComponent;
  let fixture: ComponentFixture<EditGestionUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGestionUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGestionUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
