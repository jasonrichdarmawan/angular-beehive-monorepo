import { Component } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beehive-red';

  menus!: IMenu[];

  constructor() {
    this.menus = [
      { path: "/pages/beehive-red-happy", name: "Red-Happy" } as IMenu,
      { path: "/pages/beehive-red-angry", name: "Red-Angry" } as IMenu,
    ]
  }
}
