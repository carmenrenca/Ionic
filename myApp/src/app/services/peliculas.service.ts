import { Injectable } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import {map} from "rxjs/operators";
import {PeliInterfaz} from '../../models/peli.interface';
import { Observable } from 'rxjs';

export interface pelis {
  id?:string,
  Titulo:string,
  Genero:string,
  Estreno:string,
  Duracion:string,
  Director:string,
  Descripcion:string,
  calificacion:string,
  img:string

}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

    
  private pelisCollection: AngularFirestoreCollection<PeliInterfaz>;
  private pelis: Observable<PeliInterfaz[]>;
  constructor(private db:AngularFirestore) {
    this.pelisCollection = db.collection<PeliInterfaz>('pelis');
    this.pelis = this.pelisCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
   }

  getpeliculasRooms(){
    return  this.db.collection('peliculas').snapshotChanges().pipe(map(rooms=>{
      return rooms.map(a=>{
        const data =a.payload.doc.data() as pelis;
        const id = a.payload.doc.id;
        return {id, ...data}
      })
    }))
  }
  getPeli(id:string){
    return this.pelisCollection.doc<PeliInterfaz>(id).valueChanges;
  }
updatePelicula(peli:PeliInterfaz, id: string){
  console.log(id);
return this.db.collection('peliculas').doc(id).update(peli);
}
 addPelicula(peli:PeliInterfaz){
   console.log(peli);
  return this.db.collection('peliculas').add(peli);
 }

 remove(id:string){
   return this.db.collection('peliculas').doc(id).delete;
 }

 getTodo(id: string){
  return this.pelisCollection.doc<PeliInterfaz>(id).valueChanges();
}

}
