import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  public people: any;

  constructor(
    public http: HttpClient
  ){
    http.get("https://swapi.dev/api/people").subscribe(data => {
      this.people = data;
      this.people = this.people.results;
    })
  }
}
