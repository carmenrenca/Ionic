import { Component, OnInit } from '@angular/core';
import {PeliculasService, pelis} from '../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';
import { NavController, LoadingController  } from "@ionic/angular";
import {PeliInterfaz} from '../../models/peli.interface';
@Component({
  selector: 'app-add-peliculas',
  templateUrl: './add-peliculas.page.html',
  styleUrls: ['./add-peliculas.page.scss'],
})
export class AddPeliculasPage implements OnInit {

  peli:PeliInterfaz={
   
  Titulo:'',
  Genero:'',
  Estreno:'',
  Duracion:'',
  Director:'',
  Descripcion:'',
  calificacion:'',
  img:''
  }
peliId= null;

  constructor(private route:ActivatedRoute, private nav:NavController, private peliservice:PeliculasService,
    private loading: LoadingController) { }

  ngOnInit() {
    this.peliId=this.route.snapshot.params['id'];
  
  }
  close(){
    this.nav.navigateForward('/home');
  }
 async savePelis(peliId){

console.log(peliId+"id");
   if(this.peliId){
     //update
     this.peliservice.updatePelicula(this.peli, this.peliId).then(()=>{

       this.nav.navigateForward('/');
     })

   }else{
     //add new

     this.peliservice.addPelicula(this.peli).then(()=>{

      this.nav.navigateForward('/');
      });}
 }

/**
 * 
 *  async loadpeli(){
   const loading =await this.loading.create({
     message:'Loading.....'
   });
   await loading.present();
   this.peliservice.getPeli(this.peliId).subscribe(peli=>{
     
   })
  }*/ 
  async onRemoveTo(idTodo:string) {
    this.peliservice.remove(idTodo);
  }

  async loadTodo(){
    const loading = await this.loading.create({
      message: 'Loading....'
    });
    await loading.present();

    this.peliservice.getTodo(this.peliId).subscribe(peli => {
      loading.dismiss();
      this.peli=peli;
    });
  }

 
}
