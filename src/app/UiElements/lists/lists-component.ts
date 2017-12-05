import { Component } from '@angular/core';


@Component({
    selector: 'ms-lists',
    templateUrl: './lists-component.html',
    styleUrls: ['./lists-component.scss']
})
export class ListsComponent {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
