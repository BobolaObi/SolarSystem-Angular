import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {PLANETS} from "../helper-files/contentDb";

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  createDb() {
    const planets: Content[] =  PLANETS;
    return {planets};
  }
  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id ?? 0)) + 1 : 0;
  }
}
