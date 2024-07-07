import { Component } from '@angular/core';

@Component({
  selector: 'app-app-carrito',
  templateUrl: './app-carrito.component.html',
  styleUrl: './app-carrito.component.scss'
})
export class AppCarritoComponent {

  displayedColumns = [
    "id",
    "nombre",
    "cantidad",
    "precio",
  ];

  dataSource: any[];

  constructor() {
    this.dataSource = [];
    this.getArticulosCarrito();
  }
  
  async getArticulosCarrito() {
    const result = await fetch(
      "http://localhost:8000/api/articulos/carrito/4/"
    );
    
    const response = (await result.json()) as any[];
    this.dataSource = response;
  }
}
