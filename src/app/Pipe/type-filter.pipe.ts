import {Pipe, PipeTransform} from "@angular/core";
import {Content} from "../helper-files/content-interface";



@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(planets: Content[], type?: string): Content[] {

    return planets.filter(planet => {
      console.log("planet name: ", planet.title, " type is set to ", planet.type);
      return type? planet.type === type : (!planet.type || planet.type === '');
    });

  }
}
