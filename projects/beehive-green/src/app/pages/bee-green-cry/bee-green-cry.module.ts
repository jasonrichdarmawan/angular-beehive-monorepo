import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeeGreenCryComponent } from './bee-green-cry.component';
import { BeeGreenCryRoutingModule } from './bee-green-cry-routing.module';
import { MenuModule } from 'projects/lib-beehive-ui-shared/src/lib/features/menu/menu.module';
import { IdentifierModule } from 'projects/lib-beehive-ui-shared/src/public-api';


@NgModule({
  declarations: [BeeGreenCryComponent],
  imports: [
    CommonModule,
    BeeGreenCryRoutingModule,
    IdentifierModule,
    MenuModule
  ]
})
export class BeeGreenCryModule { }
