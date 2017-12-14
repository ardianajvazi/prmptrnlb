import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'ms-dashboard',
  templateUrl:'./home-component.html',
  styleUrls: ['./home-component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class HomeComponent {
  onResize(event){
    event.target.innerWidth; // window width
    console.log(event)
  }
}
