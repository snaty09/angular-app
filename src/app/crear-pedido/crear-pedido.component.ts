import { Component } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent {
  titulo: string = '';
  descripcion: string = '';

  constructor(private pedidoService: PedidoService, private router: Router) {}


  crearPedido(): void {
    if (this.titulo && this.descripcion) {
      this.pedidoService.createPedido(this.titulo, this.descripcion).subscribe(() => {
        this.titulo = '';
        this.descripcion = '';
      });
    }
  }
}
