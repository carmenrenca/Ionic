import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-peliculas',
    loadChildren: () => import('./add-peliculas/add-peliculas.module').then( m => m.AddPeliculasPageModule)
  },
  {
    path: 'info-pelis/:id',
    loadChildren: () => import('./info-pelis/info-pelis.module').then( m => m.InfoPelisPageModule)
  },
  {
    path: 'info-pelis',
    loadChildren: () => import('./info-pelis/info-pelis.module').then( m => m.InfoPelisPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
