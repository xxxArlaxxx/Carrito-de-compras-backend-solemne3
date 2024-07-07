import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    displayName: 'Saludo',
    iconName: 'message',
    route: '/greeting',
  },
  {
    displayName: 'Admin Articulos',
    iconName: 'message',
    route: '/articulos',
  },
  {
    displayName: 'Tienda Articulos',
    iconName: 'message',
    route: '/shop/articulos',
  },
];
