import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {ProjectsComponent} from "./components/projects/projects.component";
import {PerformersComponent} from "./components/performers/performers.component";
import {CustomerComponent} from "./components/customer/customer.component";
//import {ProjectInProgressComponent} from "./components/projectinproress/projectinproress.component";

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'performers', component: PerformersComponent },
  { path: 'customers', component: CustomerComponent },
//  { path: 'projectOnStations', component: ProjectInProgressComponent}

]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
