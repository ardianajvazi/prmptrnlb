import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'textFields',
    templateUrl: './textFields-component.html',
    styleUrls: ['./textFields-component.scss']
})
export class TextFieldsComponent {
  hide = true;
  searchValue: string = '';
  clearSearch() {
    this.searchValue = null;
  }
  exampleInputError = new FormControl('', [Validators.required]);

   getErrorMessage() {
     return this.exampleInputError.hasError('required') ? 'Error: Explain error' : '';
   }
}
