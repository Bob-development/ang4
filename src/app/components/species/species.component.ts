import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrl: './species.component.css'
})
export class SpeciesComponent {
  public species: any;

  constructor(
    public http: HttpClient
  ){
    http.get("https://swapi.dev/api/species").subscribe(data => {
      this.species = data;
      this.species = this.species.results;
    })
  }
}
