import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
    selector: 'ms-dialogs',
    templateUrl: './dialogs-component.html',
    styleUrls: ['./dialogs-component.scss']
})
export class DialogsComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogViewComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: `
  <div class="test">
    <h2 mat-dialog-title>Delete all</h2>
    <mat-dialog-content>Are you sure?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <!-- Can optionally provide a result for the closing dialog. -->
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  </div>
  `
})
export class DialogViewComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
