import {ApplicationRef, Component, OnInit} from '@angular/core';
import {Content} from "./helper-files/content-interface";
import {MatSnackBar} from "@angular/material/snack-bar";

import {PlanetServiceService} from "./Services/planet-service.service";
import {MessageServiceService} from "./Services/message-service.service";
import {LogUpdateService} from "./log-update.service";
import {SwUpdate} from "@angular/service-worker";
import {concat, first, interval} from "rxjs";
@Component({

  selector:  'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Now we will force an update';
  birthday: Date;
  private updates!: SwUpdate;


    constructor( private _snackBar: MatSnackBar, private logService: LogUpdateService,
                 private log: LogUpdateService,
                 private appRef: ApplicationRef,)
    {
      this.birthday = new Date();

    }

    ngOnInit(): void {
      this.log.init();
      this.logService.init();
      const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ =  concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(() => this.updates.checkForUpdate());

    }


   openSnackBar(this: any,  message: string) {
     this.message = "loading"
     this.updates.activateUpdate().then(() =>
       document.location.reload());

    }

}

// export class AppComponent {
//   title = 'Assignment1';
//
//   chosenPlanet?: Content;

  // constructor(private planetServiceService: PlanetServiceService, private messageService: MessageServiceService) {
  // }
  //
  // ngOnInit(): void{
  //   this.planetServiceService.getContentItem(5).subscribe(
  //     planetAtIndex => this.chosenPlanet = planetAtIndex
  //   );
  // }
  // displayItem(id: string): void{
  //   if (!parseIn t(id)) {
  //     this.messageService.add("Please enter a number value");
  //     return;
  //   }
  //   let idNumber = parseInt(id);
  //   this.planetServiceService.getContent().subscribe(arrayOfPlanets => {
  //     let planetInArray = arrayOfPlanets.find(chosenPlanet => chosenPlanet.id === idNumber);
  //     if (!planetInArray) {
  //       this.messageService.add("Please enter a number value for a valid id");
  //     }
  //     else {
  //       this.chosenPlanet = planetInArray;
  //     }
  //   });
  // }
//}
