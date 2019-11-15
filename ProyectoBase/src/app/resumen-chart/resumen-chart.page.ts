import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resumen-chart',
  templateUrl: './resumen-chart.page.html',
  styleUrls: ['./resumen-chart.page.scss'],
})
export class ResumenChartPage implements OnInit {
  @ViewChild('doughnutCanvas', { static: false }) doughnutCanvas;
  doughnutChart: any;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  displayChartIngresos() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Deuda', 'Hogar', 'Alimento', 'Entretenimiento', 'Transporte',
          'Educacion', 'Regalos', 'Viajes', 'Ingresos', 'Ropa y Calazado'],

        datasets: [
          {
            label: '# de Porcentaje',
            data: [15, 5, 13, 7, 10, 8, 12, 10, 14, 6], //la suma de los porcentaje deben dar 100.
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(245, 178, 102,)', //color repetido, se tiene que cambiar
              'rgba(225, 159, 64)', //color repetido, se tiene que cambiar
              'rgba(185, 102, 102)', //color repetido, se tiene que cambiar
              'rgba(205, 153, 204)', //color repetido, se tiene que cambiar
              'rgba(173, 255, 153)' //color repetido, se tiene que cambiar
            ],

            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB',
              '#FFCE56', /*Apartir de aqui los colores estan repetidos */ '#33FF99', '#FF9933',
              '#99FF33', '#66B2FF']

          }
        ]
      }

    }

    );

  }

  displayChartEgresos() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Deuda', 'Hogar', 'Alimento', 'Entretenimiento', 'Transporte',
          'Educacion', 'Regalos', 'Viajes', 'Ingresos', 'Ropa y Calazado'],

        datasets: [
          {
            label: '# de Porcentaje',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], //la suma de los porcentaje deben dar 100.
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(245, 178, 102,)', //color repetido, se tiene que cambiar
              'rgba(225, 159, 64)', //color repetido, se tiene que cambiar
              'rgba(185, 102, 102)', //color repetido, se tiene que cambiar
              'rgba(205, 153, 204)', //color repetido, se tiene que cambiar
              'rgba(173, 255, 153)' //color repetido, se tiene que cambiar
            ],

            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB',
              '#FFCE56', /*Apartir de aqui los colores estan repetidos */ '#33FF99', '#FF9933',
              '#99FF33', '#66B2FF']

          }
        ]
      }

    }

    );

  }
}
