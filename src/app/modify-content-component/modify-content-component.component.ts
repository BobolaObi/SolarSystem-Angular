import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newPlanetEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newPlanet?: Content;

  constructor() {

}

  ngOnInit(): void {
  }
  addPlanet(id: string, title: string, image: string, description: string, tags: string): void {
    this.newPlanet = {
      id: parseInt(id),

      title: title,
      description: description,
      tags: tags.split(",")
    };
    this.newPlanetEvent.emit(this.newPlanet);
  }
}
