import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarMovimientoPage } from '../movimientos/agregar-movimiento/agregar-movimiento.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  public movimientos;



  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.movimientos = [
      {
        Descripcion: '7-Eleven Agua',
        Cantidad: '-13.00',
        Tipo: '2',
        Cuenta: 'Crédito Banorte',
        Etiqueta: 'Comida'
      },
      {
        Descripcion: 'Pago agua',
        Cantidad: '-256.00',
        Tipo: '2',
        Cuenta: 'Crédito Banorte',
        Etiqueta: 'Hogar'
      },
      {
        Descripcion: 'Quincena',
        Cantidad: '+9,800.00',
        Tipo: '2',
        Cuenta: 'Credito Banregio',
        Etiqueta: 'Sueldo'
      },
      {
        Descripcion: 'Colegiatura',
        Cantidad: '-3,750.00',
        Tipo: '2',
        Cuenta: 'Débito Banamex',
        Etiqueta: 'Educación'
      },
      {
        Descripcion: 'Pago Cuota Interna',
        Cantidad: '-4000.00',
        Tipo: '2',
        Cuenta: 'credito Banregio',
        Etiqueta: 'Educación'
      }

    ];
  }

  async abrirModal() {
    console.log(this.movimientos);
    const modal = await this.modalController.create({
      component: AgregarMovimientoPage,
      componentProps: { Descripcion: null, Cantidad: null, Tipo: null, Cuenta: null, Etiqueta: null },
    });

    modal.onDidDismiss().then((data) => {
      if (data['data'] != null) {
        console.log(data);
        this.movimientos.push(data['data']);

      }

    });


    return await modal.present();
  }


}
