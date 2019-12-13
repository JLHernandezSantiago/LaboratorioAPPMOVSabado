import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovimientosPage } from './movimientos.page';
import { AgregarMovimientoPage } from './agregar-movimiento/agregar-movimiento.page';
import { AgregarMovimientoPageModule } from './agregar-movimiento/agregar-movimiento.module';

const routes: Routes = [
  {
    path: '',
    component: MovimientosPage
  }
];

@NgModule({
  entryComponents: [
    AgregarMovimientoPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgregarMovimientoPageModule
  ],
  declarations: [MovimientosPage]
})
export class MovimientosPageModule { }
