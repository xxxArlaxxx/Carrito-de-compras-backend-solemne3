import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AppPersonasComponent } from './pages/greeting/app-personas/app-personas.component';
import { ArticulosComponent } from './pages/greeting/app-articulos/app-articulos.component';
import { AppCarritoComponent } from './pages/greeting/app-carrito/app-carrito.component';
import { AppShopArticulosComponent } from './pages/greeting/app-shop-articulos/app-shop-articulos.component';

const routes: Routes = [
  {path: 'personas', component: AppPersonasComponent},
  {path: 'articulos', component: ArticulosComponent},
  {path: 'shop/carrito', component: AppCarritoComponent},
  {path: 'shop/articulos', component: AppShopArticulosComponent},
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'greeting',
        loadChildren: () =>
          import('./pages/greeting/greeting.module').then((m) => m.GreetingModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
