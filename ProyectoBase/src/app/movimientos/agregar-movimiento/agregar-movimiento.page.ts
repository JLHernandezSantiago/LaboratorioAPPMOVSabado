import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovimientosPage } from '../movimientos.page';

@Component({
  selector: 'app-agregar-movimiento',
  templateUrl: './agregar-movimiento.page.html',
  styleUrls: ['./agregar-movimiento.page.scss'],
})
export class AgregarMovimientoPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  Descripcion: string;
  Cantidad: number;
  Tipo: number;
  Cuenta: number;
  Etiqueta: number;


  async subirMovimiento() {
    var data: any = [];
    data = { Descripcion: this.Descripcion, Cantidad: this.Cantidad, Tipo: this.Tipo, Cuenta: this.Cuenta, Etiqueta: this.Etiqueta };
    console.log("Entro a subir movimiento");
    this.modalController.dismiss(data);
  }

  async salirModal() {
    this.modalController.dismiss();
  }

}
