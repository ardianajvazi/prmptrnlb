import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Component({
    selector: 'snackbars',
    templateUrl: './snackbars-component.html',
    styleUrls: ['./snackbars-component.scss']
})
export class SnackbarsComponent {
  constructor(public snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.openFromComponent(PizzaPartyComponent, {
        duration: 500,
      });
    }
  }


  @Component({
    selector: 'snack-bar-component-example-snack',
    template: `
      <h1 class="example-pizza-party">Pizza Party</h1>
    `,
    styles: [`.example-pizza-party { color: #0099d8; }`]
  })
export class PizzaPartyComponent {} // this needs to be added to the entryComponents in app.module.ts
