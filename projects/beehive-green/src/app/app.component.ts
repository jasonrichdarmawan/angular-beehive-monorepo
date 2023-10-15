import { Component } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _menu!: IMenu[];

  title = 'beehive-green';

  constructor() {
    this._menu = [
      {
        path: "pages/beehive-green-happy",
        name: "Green-Happy"
      },
      {
        path: "pages/beehive-green-cry",
        name: "Green-Cry"
      },
    ]
  }
}
