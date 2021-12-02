import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
@Component({
  selector: 'app-edit-gestion-usuarios',
  templateUrl: './edit-gestion-usuarios.component.html',
  styleUrls: ['./edit-gestion-usuarios.component.css']
})
export class EditGestionUsuariosComponent implements OnInit {

  form: FormGroup;
  user: User;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditGestionUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) data: User
    ) {
      this.user = data;
      this.buildForm();
      // console.log(this.user);
  }
  ngOnInit(): void {
    if(this.user != null) {
      this.buildFormEdit();
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      id: [''],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  private buildFormEdit() {
    this.form = this.formBuilder.group({
      id: [this.user.id],
      nombres: [this.user.nombres, [Validators.required]],
      apellidos: [this.user.apellidos, [Validators.required]],
      email: [this.user.email, [Validators.required]],
      password: [this.user.password, [Validators.required]],
    })
  }
  saveUser(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      if (user.id == '') {
        this.userService.createUser(user)
        .subscribe((newUser)=> {
        });
      } else {
        this.userService.editUser(user)
        .subscribe((newUser)=> {
        });
      }
    }
  }
}
