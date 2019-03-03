import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { Slide } from '../slide';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'dialog-data-example-dialog.html',
  })
  export class DialogDataExampleDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: Slide) {}
  }