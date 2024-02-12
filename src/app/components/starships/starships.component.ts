import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css'
})
export class StarshipsComponent {
  public starships: any;

  constructor(
    public http: HttpClient
  ){
    http.get("https://swapi.dev/api/vehicles").subscribe(data => {
      this.starships = data;
      this.starships = this.starships.results;
    })
  }
}
