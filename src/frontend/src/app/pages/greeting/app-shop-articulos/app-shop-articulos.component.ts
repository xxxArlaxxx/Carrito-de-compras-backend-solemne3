import { Component } from '@angular/core';

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
}
