import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController  } from "@ionic/angular";
import {PeliculasService, pelis} from '../services/peliculas.service';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  public pelisFAV :any=[];
  peliId:string;
  constructor(private nav: NavController,private route:ActivatedRoute,public peliservice:PeliculasService, private router: Router) { }

  ngOnInit() {
  

  }
  close(){
    this.nav.navigateForward('home');
  }

  ionViewWillEnter(){
   this.getfavoritos();
  }

  getfavoritos(){
    console.log("entraa en get fav")
    this.peliservice.getFavoritos().subscribe(pelis=>{
      this.pelisFAV = pelis
      console.log(this.pelisFAV)
      this.peliId=this.route.snapshot.params['id'];
  })
  }

}
