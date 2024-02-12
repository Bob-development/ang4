import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  public films: any;

  constructor(
    public http: HttpClient
  ){
    http.get("https://swapi.dev/api/films").subscribe(data => {
      this.films = data;
      this.films = this.films.results;
    })
  }
}
