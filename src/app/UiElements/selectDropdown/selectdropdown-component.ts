import { Component } from '@angular/core';


@Component({
    selector: 'ms-selectdropdown',
    templateUrl: './selectdropdown-component.html',
    styleUrls: ['./selectdropdown-component.scss']
})
export class SelectdropdownComponent {
  foods = [
    {value: 'steak', viewValue: 'Steak'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'tacos', viewValue: 'Tacos'}
  ];
}
