import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {
  public planets: any;

  constructor(
    public http: HttpClient
  ){
    http.get("https://swapi.dev/api/planets").subscribe(data => {
      this.planets = data;
      this.planets = this.planets.results;
    })
  }
}
