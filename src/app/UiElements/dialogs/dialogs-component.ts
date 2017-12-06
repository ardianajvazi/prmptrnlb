import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
    selector: 'ms-dialogs',
    templateUrl: './dialogs-component.html',
    styleUrls: ['./dialogs-component.scss']
})
export class DialogsComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogViewComponent, {
      width: '575px',
      height: '184px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openSecondDialog(): void {
    let dialogRef = this.dialog.open(DialogViewComponent2, {
      width: '575px',
      height: '230px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openThirdDialog(): void {
    let dialogRef = this.dialog.open(DialogViewComponent3, {
      width: '575px',
      height: '230px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openFourthDialog(): void {
    let dialogRef = this.dialog.open(DialogViewComponent4, {
      width: '575px'
      // height: '230px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openFifthDialog(): void {
    let dialogRef = this.dialog.open(DialogViewComponent5, {
      width: '575px',
      // height: '230px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
  notDisabled() {
    this.disabled = false;
  }
}

@Component({
  selector: 'dialog-data-example-dialog3',
  templateUrl: './partials/dialog3.html',
  styleUrls: ['./dialogs-component.scss']
})
export class DialogViewComponent3 {

  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent3>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-data-example-dialog4',
  templateUrl: './partials/dialog4.html',
  styleUrls: ['./dialogs-component.scss']
})
export class DialogViewComponent4 {

  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent4>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'dialog-data-example-dialog5',
  templateUrl: './partials/dialog5.html',
  styleUrls: ['./dialogs-component.scss']
})
export class DialogViewComponent5 {

  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent5>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
