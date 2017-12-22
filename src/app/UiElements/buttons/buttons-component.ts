import { Component } from '@angular/core';


@Component({
    selector: 'buttons',
    templateUrl: './buttons-component.html',
    styleUrls: ['./buttons-component.scss']
})
export class ButtonsComponent {
  htmlCode: string;
  cssCode2: string;

    constructor() {
      this.htmlCode =
  `
  // Primary raised buttons
  <button mat-raised-button class="primary-raised-button">
    Primary Raised Button
  </button>

  <button mat-raised-button disabled class="raised-button-disable">
    Raised Disabled
  </button>

  // Secondary  raised button
  <button mat-raised-button class="secondary-raised-button">
    Secondary Button
  </button>

  <button mat-raised-button disabled class="raised-button-disable">
    Raised Disabled
  </button>

  // Flat button
  <button mat-button class="flat-button">
    Flat Button
  </button>
  <br><br>

  <button mat-button disabled>
    Disabled
  </button>
  `;
      this.cssCode2 =
  `
  .primary-raised-button {
    color: #fff !important;
    background-color: #DD6162 !important;
  }

  .raised-button-disable {
    color: #fff !important;
  }
  .secondary-raised-button {
    color: #63666A !important;
    background-color: #e0e0e0 !important;
  }

  .flat-button {
    color:  #DD6162 !important;
    background-color: #fff !important;
  }
  `

    }
}
