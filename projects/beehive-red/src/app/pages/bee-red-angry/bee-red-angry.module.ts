import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeRedAngryRoutingModule } from './bee-red-angry-routing.module';
import { BeeRedAngryComponent } from './bee-red-angry.component';
import { IdentifierModule } from 'projects/lib-beehive-ui-shared/src/public-api';


@NgModule({
  declarations: [
    BeeRedAngryComponent
  ],
  imports: [
    CommonModule,
    BeeRedAngryRoutingModule,
    IdentifierModule,
  ]
})
export class BeeRedAngryModule { }
