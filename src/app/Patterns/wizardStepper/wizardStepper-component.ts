import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'wizardStepper',
    templateUrl: './wizardStepper-component.html',
    styleUrls: ['./wizardStepper-component.scss']
})
export class WizardStepperComponent {
  isLinear = false;
}
