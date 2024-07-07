import { Component } from '@angular/core';
import Swal from "sweetalert2";
@Component({
  selector: 'app-app-shop-articulos',
  templateUrl: './app-shop-articulos.component.html',
  styleUrl: './app-shop-articulos.component.scss'
})
export class AppShopArticulosComponent {

  displayedColumns = [
    "id",
    "nombre",
    "precio",
    "cantidad",
    "add_carrito"
  ];

  dataSource: any[];

  constructor() {
    this.dataSource = [];
    this.getShopArticulos();
  }
  async getShopArticulos() {
    const result = await fetch(
      "http://localhost:8000/api/get/list/articulos/"
    );

    const response = (await result.json()) as any[];
    this.dataSource = response;
  }

  addCarrito(articulo: any){
    
    const response = fetch('http://localhost:8000/api/add/carrito/', {
      method: 'POST',
      body: JSON.stringify({
        articulo: articulo.id,
        usuario: 4, // se envía el usuario directamente sólo para desarrollar el envío de artículos al carrito anterior al desarrollo de identificación de usuarios
        cantidad: 1, // al agregar un carrito primero se envía 1 unidad de forma predeterminada, luego en el carrito se modifica la cantidad a gusto del usuario
      }),
      headers: {
        'Content-type': 'application/json; chaset=UTF-8'
      }
    });
    
    Swal.fire({
      title: "Agregado al carrito",
      text: `${articulo.nombre} se ha agregado al carrito correctamente.`,
      icon: "success",
    });

  }
}
