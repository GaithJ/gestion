import { Component, OnInit } from '@angular/core';
import { concatMap } from 'rxjs';
import { equipement } from '../model/equipement';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent implements OnInit {
  equipements: equipement[] = [];
  
 
  
  
  

  constructor(private equipementservice: EquipementService) {
    
   }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  this.liste()
    
  }
  liste(){
    this.equipementservice.getall().subscribe(res =>
      {
        this.equipements=res
      })
  }
  deleteequipement(id:number){
    this.equipementservice.deleteequipement(id).subscribe((res)=>{
      this.getall()
      
    })
//   liste(){this.equipements = this.equipementservice.listeEquipement();}

//    ajouetrequipement (equipement: equipement){
//     this.equipements.push(equipement)
    
  

//    }
//  supprimerEquipement(element: equipement){
//     //console.log(element);
//     let conf = confirm("Etes-vous sûr ?");
//  if (conf)

//     this.equipementservice.supprimerEquipement(element);
//   }
  
}
  getbyid() {
    throw new Error('Method not implemented.');
  }
  getall() {
    throw new Error('Method not implemented.');
  }
}