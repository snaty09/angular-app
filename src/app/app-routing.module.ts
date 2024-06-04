import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  { path: '', redirectTo: 'crear-pedido', pathMatch: 'full' },
  { path: 'crear-pedido', component: CrearPedidoComponent },
  { path: 'pedidos', component: PedidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
