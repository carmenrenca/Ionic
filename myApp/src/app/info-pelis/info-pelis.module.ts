import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPelisPageRoutingModule } from './info-pelis-routing.module';

import { InfoPelisPage } from './info-pelis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPelisPageRoutingModule
  ],
  declarations: [InfoPelisPage]
})
export class InfoPelisPageModule {}
