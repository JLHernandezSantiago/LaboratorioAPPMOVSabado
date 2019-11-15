import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

Cuentas = [
  {
    NombreBanco: '7-Eleven',
    NumeroCuenta: '1234567890',
    DineroDisponible: '5000'
  }
  ,
  {
    NombreBanco: 'Santander',
    NumeroCuenta: '123454321234',
    DineroDisponible: '2000'
  }
  ,
  {
    NombreBanco: 'Banorte',
    NumeroCuenta: '1236784567',
    DineroDisponible: '5000'
  }
];
  constructor() {}

}
