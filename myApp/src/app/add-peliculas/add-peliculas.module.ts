import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPeliculasPageRoutingModule } from './add-peliculas-routing.module';

import { AddPeliculasPage } from './add-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPeliculasPageRoutingModule
  ],
  declarations: [AddPeliculasPage]
})
export class AddPeliculasPageModule {}
