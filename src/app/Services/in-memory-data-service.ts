import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Content} from "../helper-files/content-interface";
import {PLANETS} from "../helper-files/contentDb";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const content : Content[] = PLANETS;
    return {content};
  }

  genId(content: Content[]): number { // [0, 1, 2]
    return content.length > 0 ? Math.max(...content.map(c => { return c.id ?? 0 })) + 1 : 2000;
  }
}
