import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
