import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "../helper-files/content-interface";


@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(planets: Content[], tagCount?: number): Content[] {
    /**
     if tagCount is not set, return planets that have no tags or an empty array of tags
     if tagCount is set, return the planets with the number of tags being equal to tagCount
     */
    return planets.filter(planet => {
      console.log("planet with tags: ", planet.tags, " number of tags = ", planet.tags?.length);
      return  tagCount ? planet.tags?.length === tagCount : (!planet.tags || planet.tags?.length === 0);
      // return true;
    });

  }
}

