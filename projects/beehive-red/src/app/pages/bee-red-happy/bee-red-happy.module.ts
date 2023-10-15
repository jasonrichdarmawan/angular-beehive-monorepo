import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeRedHappyRoutingModule } from './bee-red-happy-routing.module';
import { BeeRedHappyComponent } from './bee-red-happy.component';
import { IdentifierModule } from 'projects/lib-beehive-ui-shared/src/public-api';


@NgModule({
  declarations: [
    BeeRedHappyComponent,
  ],
  imports: [
    CommonModule,
    BeeRedHappyRoutingModule,
    IdentifierModule,
  ]
})
export class BeeRedHappyModule { }
