import { Component, OnInit } from '@angular/core';
import {PeliculasService, pelis} from '../services/peliculas.service';
import {ModalController} from "@ionic/angular";
import{InfoPelisPage} from '../info-pelis/info-pelis.page';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public pelisRooms :any=[];
  peliId:string;
  constructor(private route:ActivatedRoute,public peliservice:PeliculasService, private modal: ModalController, private router: Router) { }

  ngOnInit() {
    this.peliservice.getpeliculasRooms().subscribe(pelis=>{
        this.pelisRooms = pelis
        this.peliId=this.route.snapshot.params['id'];
    })
  }

  openPelis(pelis){
    
    this.router.navigateByUrl('info-pelis');
  }

  add(){
    this.router.navigateByUrl('add-peliculas');
  }
} 
