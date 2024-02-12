import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { FilmsComponent } from './components/films/films.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  {
    path: 'People', 
    component: PeopleComponent
  },

  {
    path: 'Planets',
    component: PlanetsComponent
  },

  {
    path: 'Films',
    component: FilmsComponent
  },

  {
    path: 'Species',
    component: SpeciesComponent
  },

  {
    path: 'Vehicles',
    component: VehiclesComponent
  },

  {
    path: 'Starships',
    component: StarshipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
