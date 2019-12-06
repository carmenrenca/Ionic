import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController  } from "@ionic/angular";
import {PeliculasService, pelis} from '../services/peliculas.service';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  public pelisFAV :any=[];
  peliId:string;
  private subcripcion: Subscription;
  constructor(private nav: NavController,private route:ActivatedRoute,public peliservice:PeliculasService, private router: Router) { }

  ngOnInit() {
  

  }
  close(){
    this.nav.navigateForward('home');
  }

  ionViewWillEnter(){
    console.log("entraa en view");
    this.pelisFAV=[];
    this.subcripcion= this.peliservice.getFavoritos().subscribe(pelis=>{
      this.pelisFAV = pelis
      console.log(this.pelisFAV)
  
  })
  }
  async Removefav(id:string) {
  console.log(id+"remove");
    this.peliservice.removefav(id);
 
    this.nav.navigateForward('home');
  }
  
  ionViewDidLeave(){
    this.subcripcion.unsubscribe();
  }

 
}
