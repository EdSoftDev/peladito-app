import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormHeaderComponent } from './app-form-header.component';

describe('AppFormHeaderComponent', () => {
  let component: AppFormHeaderComponent;
  let fixture: ComponentFixture<AppFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
