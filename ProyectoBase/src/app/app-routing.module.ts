import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrarPage } from './auth/registrar/registrar.page';
import { LoginPage } from './auth/login/login.page';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'registro', component: RegistrarPage },
  { path: 'registrar', component: RegistrarPage  },
  { path: 'registro', loadChildren: './auth/registro/registro.module#RegistroPageModule' },
  { path: 'login', component: LoginPage },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },  { path: 'modals', loadChildren: './modals/modals.module#ModalsPageModule' },
  { path: 'cuenta', loadChildren: './cuenta/cuenta.module#CuentaPageModule' },
  { path: 'movimientos', loadChildren: './movimientos/movimientos.module#MovimientosPageModule' },
  { path: 'resumen-chart', loadChildren: './resumen-chart/resumen-chart.module#ResumenChartPageModule' },
  { path: 'agregar-cuenta', loadChildren: './agregar-cuenta/agregar-cuenta.module#AgregarCuentaPageModule' },
  { path: 'agregar-movimiento', loadChildren: './agregar-movimiento/agregar-movimiento.module#AgregarMovimientoPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
