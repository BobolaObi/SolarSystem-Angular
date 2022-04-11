import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {PlanetServiceService} from "../Services/planet-service.service";
import {MessageServiceService} from "../Services/message-service.service";



// imgURL: "https://scitechdaily.com/images/Magellan-Venus-Surface.jpg", --Content for firs planet
@Component({
  selector: 'app-content-list',
  templateUrl: "./content-list.component.html",
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent implements OnInit {
  planets: Content[];
  searchTitle?: boolean;
  title = 'Assignment1';

  chosenPlanet?: Content;

  constructor(private planetServiceService: PlanetServiceService,
              private messageService: MessageServiceService) {

    this.planets = [];
  }

  // ngOnInit(): void {
  //   this.planetsService.getContent().subscribe(listedPlanets => this.planets = listedPlanets);
  // }

  //The type we are searching for is a string
  checkForTitle(title: string): void {
    if (this.planets.some(d => d.title === title)) {
      this.searchTitle = true;
    } else {
      this.searchTitle = false;
    }
    if (this.planets.filter(d => d.title === title).length) {
      this.searchTitle = true;
    } else {
      this.searchTitle = false;
    }

  }

  addContentToList(newContent: Content): void {
    console.log("content that came from the child element: ", newContent);
    this.planets.push(newContent);
    this.planets = [...this.planets];
    console.log("my list after cloning: ", this.planets);
  }

  //content from app component
  ngOnInit(): void {
    // this.planetsService.getContent().subscribe(listedPlanets => this.planets = listedPlanets);

    this.planetServiceService.getContentItem(5).subscribe(
      planetAtIndex => this.chosenPlanet = planetAtIndex
    );
    }
    displayItem(id: string): void{
      if (!parseInt(id)) {
        this.messageService.add("Please enter a number value");
        return;
      }
      let idNumber = parseInt(id);
      this.planetServiceService.getContent().subscribe(arrayOfPlanets => {
        let planetInArray = arrayOfPlanets.find(chosenPlanet => chosenPlanet.id === idNumber);
        if (!planetInArray) {
          this.messageService.add("Please enter a number value for a valid id");
        }
        else {
          this.chosenPlanet = planetInArray;
        }
      });

  }
}
