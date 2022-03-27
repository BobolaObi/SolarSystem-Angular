import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {PLANETS} from "../helper-files/contentDb";
import {Content} from "../helper-files/content-interface";
import {MessageServiceService} from "./message-service.service";

@Injectable({
  providedIn: 'root'
})
export class PlanetServiceService {

  constructor(private messageService: MessageServiceService) { }

  getContent(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return of(PLANETS);
  }
  getContentItem(id: number): Observable<Content>{
    this.messageService.add(`Content Item at id: ${id}`);
    return of(PLANETS[id]);
  }

}



