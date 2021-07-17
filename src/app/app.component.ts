import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private _snackBar: MatSnackBar) {
  }

  boom() {
    this._snackBar.openFromComponent(TmpBoomComponent, {
      duration: 1000,
    });
  }
}

@Component({
  selector: 'tmp-boom',
  template: 'BOOM!',
  styles: [],
})
export class TmpBoomComponent {}
