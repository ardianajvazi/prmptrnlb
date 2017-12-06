import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
    selector: 'ms-dialogs',
    templateUrl: './dialogs-component.html',
    styleUrls: ['./dialogs-component.scss']
})
export class DialogsComponent {
  // checked = false;
  // indeterminate = false;
  // align = 'start';
  // disabled = false;
  animal: string;
  name: string;
  foo: string;
  bar: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogViewComponent, {
      width: '575px',
      height: '184px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openSecondDialog(): void {
    let dialogRef = this.dialog.open(DialogViewComponent2, {
      width: '575px',
      height: '230px',
      data: { bar: this.bar, foo: this.foo }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.foo = result;
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './partials/dialog.html',
  styleUrls: ['./dialogs-component.scss']
})
export class DialogViewComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-data-example-dialog2',
  templateUrl: './partials/dialog2.html',
  styleUrls: ['./dialogs-component.scss']
})
export class DialogViewComponent2 {
  disabled = true;

  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent2>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  click() {
    disable = false;
  }

}
