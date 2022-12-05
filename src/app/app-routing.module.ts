import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  //pathMach full, porque si no cualquier ruta comienza por vacio.
  {path:'',component: PorPaisComponent, pathMatch:'full'},
  {path:'region',component: PorRegionComponent},
  {path:'capital',component: PorCapitalComponent},
  //ruta un poco especial, porque le tenemos que pasar un id
  // del pais que queremos que se muestre.
  // como tiene que pasarse de manera dinámica se indica con :y el identificador
  {path:'pais/:id',component: VerPaisComponent},
  // ruta erronea, se coloca al final
  {path:'**',redirectTo: ''},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
