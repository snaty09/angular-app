import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

interface Pedido {
  id: number;
  titulo: string;
  descripcion: string;
  entregado: boolean;
}
interface pedidoEntregados {
  id: number;
  titulo: string;
  descripcion: string;
  entregado: boolean;
}


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  pedidosEntregados: pedidoEntregados[] = [];


  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe((data) => {
      this.pedidos = data;
    });
  }

  getPedidosEntregados(): void {
    this.pedidoService.getPedidosEntregados().subscribe((Data) => {
      this.pedidosEntregados = Data;
    });
  }

  marcarComoEntregado(id: number): void {
    this.pedidoService.marcarComoEntregado(id).subscribe(() => {
      this.getPedidos();
    });
  }
}
