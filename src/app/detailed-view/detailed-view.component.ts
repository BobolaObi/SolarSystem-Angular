import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ActivatedRoute} from "@angular/router";
import {PlanetServiceService} from "../Services/planet-service.service";

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {

  id?: number;
  idPlanet: Content | undefined;
  constructor(private route: ActivatedRoute, private planetService: PlanetServiceService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')) {
        console.error("this is really bad, how did the id not get set?");
      }
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.planetService.getContentItem(this.id).subscribe((singlePlanet) => {
        this.idPlanet = singlePlanet;
      });
    });
  }
}
