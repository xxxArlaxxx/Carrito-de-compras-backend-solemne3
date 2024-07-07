import { Component } from '@angular/core';
import { Articulo } from 'src/app/modelos/articulos.interface';
import Swal from "sweetalert2";

@Component({
  selector: 'app-articulos',
  templateUrl: './app-articulos.component.html',
  styleUrl: './app-articulos.component.scss'
})
export class ArticulosComponent {
  displayedColumns = [
    "id",
    "nombre",
    "precio",
    "cantidad",
    "edit"
  ];
  dataSource: any[];

  constructor() {
    this.dataSource = [];
    this.getArticulos();
  }

  async getArticulos() {
    const result = await fetch(
      "http://localhost:8000/api/get/list/articulos/"
    );

    const response = (await result.json()) as any[];
    this.dataSource = response;
  }

saveArticulo(nombre: any, precio:any, cantidad: any) {
    fetch('http://localhost:8000/api/post/articulos/', {
      method: 'POST',
      body: JSON.stringify({
        nombre: nombre,
        precio: parseInt(precio),
        cantidad: parseInt(cantidad)
      }),
      headers: {
        'Content-type': 'application/json; chaset=UTF-8'
      }
    })
  }
  async addArticulo() {
    type AddPersonForm = {
      nombre: string;
      precio: number;
      cantidad: number;
    };

    let nombreInput: HTMLInputElement;
    let precioInput: HTMLInputElement;
    let cantidadInput: HTMLInputElement;

    Swal.fire<AddPersonForm>({
      title: "Agregar artículo",
      html: `
    <input type="text" id="nombre" class="swal2-input" placeholder="Nombre del producto">
    <input type="text" id="precio" class="swal2-input" placeholder="precio">
    <input type="text" id="cantidad"d class="swal2-input" placeholder="cantidad">
  
    `,
      confirmButtonText: "Registrar",
      focusConfirm: false,
      didOpen: () => {
        const popup = Swal.getPopup()!;
        nombreInput = popup.querySelector("#nombre") as HTMLInputElement;
        precioInput = popup.querySelector("#precio") as HTMLInputElement;
        cantidadInput = popup.querySelector("#cantidad") as HTMLInputElement;

        nombreInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
        precioInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
        cantidadInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
      },
      preConfirm: () => {
        const nombre = nombreInput.value;
        const precio = precioInput.value;
        const cantidad = cantidadInput.value;
        this.saveArticulo(nombre, cantidad, precio)
        this.getArticulos();
      },
    });
  }

  deleteArticulo(articulo: any) {
    Swal.fire({
      title: "¡Precaución!",
      text: `¿Está seguro que desea eliminar a ${articulo.nombre}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      confirmButtonColor: "crimson",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        console.log(articulo.id)
        const response = await fetch(
          `http://localhost:8000/api/delete/articulo/${articulo.id}/`,
          {
            method: "DELETE",
          }
        );

        if (response.status >= 200 && response.status <= 205) {
          Swal.fire({
            title: "Eliminado",
            text: `${articulo.nombre} se a eliminado de los registros`,
            icon: "success",
          }).then((ok) => {
            if (ok.value) {
              this.getArticulos();
            }
          });
        } else {
          Swal.fire({
            title: "Error",
            text: `No se pudo eliminar a ${articulo.nombre}`,
            icon: "error",
          });
        }
      }
    });
  }
}
