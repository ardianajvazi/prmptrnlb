import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
    selector: 'ms-selectdropdown',
    templateUrl: './selectdropdown-component.html',
    styleUrls: ['./selectdropdown-component.scss']
})
export class SelectdropdownComponent {
  hide = true;
  searchValue: string = '';
  clearSearch() {
    this.searchValue = null;
  }
  exampleInputError = new FormControl('', [Validators.required]);

   getErrorMessage() {
     return this.exampleInputError.hasError('required') ? 'Error: Explain error' : '';
   }
   categoryControl = new FormControl();

   categoryGroups = [
    {
      name: 'Category 1',
      item: [
        { value: '', viewValue: 'Item 1' },
        { value: '', viewValue: 'Item 2' }
      ]
    },
    {
      name: 'Category 2',
      item: [
        { value: '', viewValue: 'Item 1' },
        { value: '', viewValue: 'Item 2' },
        { value: '', viewValue: 'Item 3' }
      ]
    },
    {
      name: 'Category 3',
      disabled: true,
      item: [
        { value: '', viewValue: 'Item 1' },
        { value: '', viewValue: 'Item 2' },
        { value: '', viewValue: 'Item 3' }
      ]
    },
    {
      name: 'Category 4',
      item: [
        { value: '', viewValue: 'Item 1' },
        { value: '', viewValue: 'Item 2' },
        { value: '', viewValue: 'Item 3' }
      ]
    }
  ];

}
