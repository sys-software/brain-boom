import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {IoService} from './services/io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {


  constructor(
    private _snackBar: MatSnackBar,
    private is: IoService
  ) {
  }

  boom() {
    this._snackBar.openFromComponent(TmpBoomComponent, {
      duration: 1000,
    });
    const z = {
      "version": "bbb1",
      "questions": [
        {
          "questionText": "To be or not to be?",
          "questionPicture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
          "answers": [
            {
              "id": "1",
              "text": "True answer option text./n May be multine",
              "truth": 1
            },
            {
              "id": "2",
              "text": "False answer option text.",
              "truth": 0
            },
          ]
        }
      ]
    }
    this.is.importFromString(JSON.stringify(z))
  }
}

@Component({
  selector: 'tmp-boom',
  template: 'BOOM!',
  styles: [],
})
export class TmpBoomComponent {}
