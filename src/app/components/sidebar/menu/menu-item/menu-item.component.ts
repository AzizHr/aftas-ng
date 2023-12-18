import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() itemText: string = '';
  @Input() itemIcon: string= '';
  @Input() link: string = '';
}
