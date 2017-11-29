import {Component, Optional, ViewEncapsulation} from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  	selector: 'my-app',
    templateUrl: 'nav/nav-component.html',
  	// template:'<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None
})
export class MyAppComponent {

}
