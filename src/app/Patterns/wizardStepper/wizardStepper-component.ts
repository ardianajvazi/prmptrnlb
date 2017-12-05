import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'ms-wizardStepper',
    templateUrl: './wizardStepper-component.html',
    styleUrls: ['./wizardStepper-component.scss']
})
export class WizardStepperComponent {
  isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }
  }
