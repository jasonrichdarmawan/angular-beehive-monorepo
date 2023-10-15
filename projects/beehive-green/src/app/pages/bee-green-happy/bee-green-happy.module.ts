import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeGreenHappyRoutingModule } from './bee-green-happy-routing.module';
import { BeeGreenHappyComponent } from './bee-green-happy.component';
import { MenuModule } from 'projects/lib-beehive-ui-shared/src/lib/features/menu/menu.module';
import { IdentifierModule } from 'projects/lib-beehive-ui-shared/src/public-api';


@NgModule({
  declarations: [BeeGreenHappyComponent],
  imports: [
    CommonModule,
    BeeGreenHappyRoutingModule,
    IdentifierModule,
    MenuModule
  ]
})
export class BeeGreenHappyModule { }
