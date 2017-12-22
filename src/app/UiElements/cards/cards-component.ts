import { Component } from '@angular/core';


@Component({
    selector: 'cards',
    templateUrl: './cards-component.html',
    styleUrls: ['./cards-component.scss']
})
export class CardsComponent {
  panelOpenState: boolean = false;
}
