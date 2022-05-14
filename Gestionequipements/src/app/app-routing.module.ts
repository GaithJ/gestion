import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipementsComponent } from './equipements/equipements.component';
import { AddEquipementComponent } from './add-equipement/add-equipement.component';
import { UpdateEquipementComponent } from './update-equipement/update-equipement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';

import { ProfilComponent } from './profil/profil.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path: "equipements", component : EquipementsComponent},
  {path: "add-equipement", component : AddEquipementComponent},
  {path: "updateEquipement/:id", component: UpdateEquipementComponent},
  {path: "accueil", component : AccueilComponent},
  {path:"login",component :LoginComponent},
  
  {path:"profil",component:ProfilComponent},
  {path:"services",component:ServicesComponent},
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
