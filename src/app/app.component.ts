import { Component } from '@angular/core';
import {Content} from "./helper-files/content-interface";
import {PlanetServiceService} from "./Services/planet-service.service";
import {MessageServiceService} from "./Services/message-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment1';

  chosenPlanet?: Content;

  constructor(private planetServiceService: PlanetServiceService, private messageService: MessageServiceService) {
  }

  ngOnInit(): void{
    this.planetServiceService.getContentItem(5).subscribe(
      planetAtIndex => this.chosenPlanet = planetAtIndex
    );
  }
  displayItem(id: string): void{
    if (!parseInt(id)) {
      //
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
