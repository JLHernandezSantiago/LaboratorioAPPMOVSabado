import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  registrarForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    
    this.registrarForm = this.formBuilder.group(
      {
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required]
    });
   }

  ngOnInit() {}

get f() { return this.registrarForm.controls; }

  registrar() {
      console.log(this.registrarForm.valid);
  }
}
