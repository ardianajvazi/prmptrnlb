import { Component } from '@angular/core';


@Component({
    selector: 'ms-radiobuttons',
    templateUrl: './radiobuttons-component.html',
    styleUrls: ['./radiobuttons-component.scss']
})
export class RadiobuttonsComponent {
  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
