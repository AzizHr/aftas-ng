import { Component } from '@angular/core';
import { MenuItem } from './menu-item/MenuItem';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    new MenuItem('Dashboard', 'fa-solid fa-bars'),
    new MenuItem('Competitions', 'fa-solid fa-motorcycle'),
    new MenuItem('Fish', 'fa-solid fa-fish-fins'),
    new MenuItem('New Hunting', 'fa-solid fa-utensils'),
    new MenuItem('Members', 'fa-solid fa-users'),
    new MenuItem('New Member', 'fa-solid fa-ranking-star'),
    new MenuItem('Levels', 'fa-solid fa-turn-up'),
  ];

  routeLinks: string[] = [
    '/',
    '/competitions',
    '/fish',
    '/new-hunting',
    '/members',
    '/new-member',
    '/levels'
  ];

}