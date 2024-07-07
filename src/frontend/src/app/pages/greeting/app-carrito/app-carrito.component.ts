import { Component } from '@angular/core';
import Swal from "sweetalert2";

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
    "accion"
  ];

  dataSource: any[];
  totalPrecio: number = 0;

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
    console.log(response)
    for (const dato of response) {
      this.totalPrecio += dato.articulo_precio;
    }
    console.log(this.totalPrecio)
  }

  deleteArticuloCarrito(articulo: any) {
    Swal.fire({
      title: "¡Precaución!",
      text: `¿Está seguro que desea eliminar a ${articulo.articulo_nombre}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      confirmButtonColor: "crimson",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        const response = await fetch(
          // se envía el usuario directamente sólo para desarrollar el envío de artículos al carrito anterior al desarrollo de identificación de usuarios
          `http://localhost:8000/api/delete/articulos/carrito/4/${articulo.articulo_id}/`,
          {
            method: "DELETE",
          }
        );

        if (response.status >= 200 && response.status <= 205) {
          Swal.fire({
            title: "Eliminado",
            text: `${articulo.articulo_nombre} se a eliminado de los registros`,
            icon: "success",
          }).then((ok) => {
            if (ok.value) {
              this.getArticulosCarrito();
            }
          });
        } else {
          Swal.fire({
            title: "Error",
            text: `No se pudo eliminar a ${articulo.articulo_nombre}`,
            icon: "error",
          });
        }
      }
    });
  }
}
