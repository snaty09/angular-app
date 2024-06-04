import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:3000/api/pedidos';

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  getPedidosEntregados(): Observable<pedidoEntregados[]> {
    return this.http.get<pedidoEntregados[]>( 'http://localhost:3000/api/pedidos/getPedidosEntregados');
  }

  createPedido(titulo: string, descripcion: string): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, { titulo, descripcion });
  }

  marcarComoEntregado(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/entregado`, {});
  }
}
