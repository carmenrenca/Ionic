import { Component, OnInit } from '@angular/core';
import {PeliculasService, pelis} from '../services/peliculas.service';
import {ModalController} from "@ionic/angular";
import{InfoPelisPage} from '../info-pelis/info-pelis.page';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { NavController } from "@ionic/angular";
import { Subscription } from 'rxjs';
import{AuthService} from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public pelisRooms :any=[];
  peliId:string;
  private subcripcion: Subscription;
  constructor( private nav: NavController, private afAuth:AngularFireAuth,private authSvc:AuthService, 
    private route:ActivatedRoute,public peliservice:PeliculasService, private modal: ModalController, private router: Router) { }

  ngOnInit() {
   
      this.peliservice.getpeliculasRooms().subscribe(pelis=>{
        this.pelisRooms = pelis
        this.peliId=this.route.snapshot.params['id'];
    })

   
  }

  exitUser(){
console.log("salir")
console.log('Logout');
this.afAuth.auth.signOut();

this.router.navigateByUrl('/login');


  }
  
  favorito(){
    
    this.nav.navigateForward('/favoritos');
  }

  ionViewWillEnter() {

    
    this.peliservice.getpeliculasRooms().subscribe(pelis=>{
      this.pelisRooms = pelis
      this.peliId=this.route.snapshot.params['id']; })
  }

  openPelis(pelis){
    
    this.router.navigateByUrl('info-pelis');
  }

  add(){
    this.router.navigateByUrl('add-peliculas');
  }
} 
