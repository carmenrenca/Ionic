import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from "@ionic/angular";
import { NavController } from "@ionic/angular";
import {PeliculasService, pelis} from '../services/peliculas.service';
import { ActivatedRoute} from '@angular/router';

import {PeliInterfaz} from '../../models/peli.interface';
@Component({
  selector: 'app-info-pelis',
  templateUrl: './info-pelis.page.html',
  styleUrls: ['./info-pelis.page.scss'],
})
export class InfoPelisPage implements OnInit {
  peli:PeliInterfaz={
    id:'',
    Titulo:'',
    Genero:'',
    Estreno:'',
    Duracion:'',
    Director:'',
    Descripcion:'',
    calificacion:'',
    img:''
      }
      peliId=null;
  constructor(private route: ActivatedRoute, private nav: NavController, private peliservice: PeliculasService) { }
 
 
  ngOnInit() {
   
    this.peliId = this.route.snapshot.params['id'];
    if (this.peliId){
     
      this.loadTodo();
    }
   /// ionViewWillLeave(){
  /** this.peli.id=this.navparams.get('id');
    this.peli.Titulo=this.navparams.get('Titulo');
    this.peli.Director=this.navparams.get('Director');
    this.peli.Duracion=this.navparams.get('Duracion');
    this.peli.Descripcion=this.navparams.get('Descripcion');
    this.peli.Estreno=this.navparams.get('Estreno');
    this.peli.calificacion=this.navparams.get('calificacion');
    this.peli.Genero=this.navparams.get('Genero'); */ 
    
  }
  async loadTodo(){
   console.log(this.peliId);
this.peliservice.getTodo(this.peliId).subscribe(peli => {
       
      this.peli = peli;
  
    });
  }

  close(){
    this.nav.navigateForward('home');
  }



  async guardatfav(){
  console.log(this.peliId)
  if(this.peliId){
   
    this.peliservice.AddFavPelicula(this.peli, this.peliId).then(()=>{

    })
  }
}

  async savePelis(peliId){

    if(this.peli.id){
      //update
      this.peliservice.updatePelicula(this.peli, this.peli.id).then(()=>{
    
        this.nav.navigateForward('home');
      })
 
    }else{
      //add new

 
      this.peliservice.addPelicula(this.peli).then(()=>{
  
       this.nav.navigateForward('home');
       });}
  }

  async RemovePeli() {
  
    this.peliservice.remove(this.peliId );
 
    this.nav.navigateForward('home');
  }
}
