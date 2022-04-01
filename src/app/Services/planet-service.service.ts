import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {PLANETS} from "../helper-files/contentDb";
import {Content} from "../helper-files/content-interface";
import {MessageServiceService} from "./message-service.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetServiceService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };

  constructor(private messageService: MessageServiceService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return of(PLANETS);
  }
  getContentItem(id: number): Observable<Content>{
    this.messageService.add(`Content Item at id: ${id}`);
    return of(PLANETS[id]);
  }

  addContent(newContentItem: Content): Observable<Content>{
    this.messageService.add("Adding new content to the server!");
    return this.http.post<Content>("api/fakePlanetAPI", newContentItem,
      this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    this.messageService.add("Updating content on the server, id: " + contentItem.id);
    return this.http.put("api/digimon", contentItem, this.httpOptions);
  }
}



