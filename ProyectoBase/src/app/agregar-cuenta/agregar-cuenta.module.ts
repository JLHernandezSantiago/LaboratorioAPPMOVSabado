import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgregarCuentaPage } from './agregar-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCuentaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgregarCuentaPage]
})
export class AgregarCuentaPageModule {}
