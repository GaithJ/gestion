import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Categorie } from '../model/categorie';
import { equipement } from '../model/equipement';
import { service } from '../model/service';

const httpOptions = {
  headers: new HttpHeaders
    ({
      'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})

export class EquipementService {
  supprimerEquipement(element: any) {
    throw new Error('Method not implemented.');
  }
 
  equipements!: equipement[];
  equipement: any;
  // categories: Categorie[] = []
  categorie: any


  nomCat: string | undefined

  url = 'http://localhost:3000/mylist'
  url1 = 'http://localhost:3000/service'
  
  
  


  constructor(private http: HttpClient) { }

  getall(): Observable<equipement[]> {
    return this.http.get<equipement[]>(`${this.url}`)
  }
  getallser(): Observable<service[]> {
    return this.http.get<service[]>(`${this.url1}`)
  }
  addequipement(data: equipement): Observable<equipement[]> {
    // console.log(data);
    
    return this.http.post<equipement[]>(`${this.url}`, data, httpOptions)
  }
  



getbyid(id:number): Observable<equipement[]> {
  return this.http.get<equipement[]>(`${this.url}/${id}`)
}
updateequipement(data:equipement): Observable<equipement> {
  console.log('data : ',data);
  
  return this.http.put<equipement>(`${this.url}/${data.NInv}`,data,httpOptions)
}
deleteequipement(id:number): Observable<equipement>{
  console.log
  return this.http.delete<equipement>(`${this.url}/${id}`)
}


    //   listeEquipement():equipement[]{
    //     return this.equipements;
    //   }
    //   ajouetrequipement (equipement: equipement){
    //     this.equipements.push(equipement);
    //  }
    //supprimerEquipement(element: equipement){
    // const index = this.equipements.indexOf(element,0)
    // if (index > -1) {
    //this.equipements.splice(index,1);
 
}
  //  consulterEquipement(NInv:number): equipement{
  //   return this.equipement.find((element: { NInv: number; }) => element.NInv == NInv);
  //   //return this.equipement;
  //   }
    // updateequipement(element:equipement)
    // {
    // // console.log(p);
    // this.supprimerEquipement(element);
    // this.ajouetrequipement(element);
    // }
    // listeCategories():Categorie[] {
    //   return this.categories;
    //   }

  //     consulterCategorie(id:number): Categorie{
  //       this.categorie = this.categories.find(cat => cat.idCat == id);
  //       return this.categorie;
  //       }






