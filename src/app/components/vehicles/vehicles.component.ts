import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
  public vehicles: any;

  constructor(
    public http: HttpClient
  ){
    http.get("https://swapi.dev/api/vehicles").subscribe(data => {
      this.vehicles = data;
      this.vehicles = this.vehicles.results;
    })
  }
}
