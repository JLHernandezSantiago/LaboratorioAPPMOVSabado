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
        Descripcion: '7-Eleven Papitas',
        Cantidad: '-18.00',
        Tipo: '2',
        Cuenta: 'Crédito Banorte',
        Etiqueta: 'Comida'
      },
      {
        Descripcion: 'Pago agua',
        Cantidad: '-360.00',
        Tipo: '2',
        Cuenta: 'Crédito Banorte',
        Etiqueta: 'Hogar'
      },
      {
        Descripcion: 'Quincena',
        Cantidad: '+7,500.00',
        Tipo: '2',
        Cuenta: 'Débito Banregio',
        Etiqueta: 'Sueldo'
      },
      {
        Descripcion: 'Colegiatura',
        Cantidad: '-2,500.00',
        Tipo: '2',
        Cuenta: 'Débito Banamex',
        Etiqueta: 'Educación'
      },
      {
        Descripcion: 'Pago Cuota Interna',
        Cantidad: '-3650.00',
        Tipo: '2',
        Cuenta: 'Débito Banregio',
        Etiqueta: 'Educación'
      }

    ];
    /*this.movimientos = [
      {
        descripcion: '7-Eleven',
        cantidad: '-18',
        tipo: '2', //1 - Ingreso, 2 - Egreso
        cuenta: {
          nombre: 'Crédito Banorte',
          id: 1
        },
        etiqueta: {
          id: 1,
          descripcion: 'Comida'
        },
        fecha: '2019-11-08'
      }

    ];*/
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
