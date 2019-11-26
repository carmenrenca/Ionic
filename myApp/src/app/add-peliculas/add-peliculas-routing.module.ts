import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPeliculasPage } from './add-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: AddPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPeliculasPageRoutingModule {}
