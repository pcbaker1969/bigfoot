import { Component, OnInit } from '@angular/core';

export class Sighting {
  constructor(
    public id: number,
    public username: string,
    public city: string, 
    public lat: number,
    public long: number,
    public description: string,
    public sightDate: Date) {}
}

@Component({
  selector: 'app-sightings-list',
  templateUrl: './sightings-list.component.html',
  styleUrls: ['./sightings-list.component.css']
})
export class SightingsListComponent implements OnInit {
  sightings = [ 
    new Sighting(1, "Meryl", "Herndon", 38.97, -77.39, "It was bigfoot!", new Date()), 
    new Sighting(2, "Earl", "Chantilly", 38.89, -77.43, "Bigfoot eating a cat", new Date()),
    new Sighting(3, "Mort", "Ashburn", 39.04, -77.48, "Bigfoot looking through the window of my house", new Date())   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
