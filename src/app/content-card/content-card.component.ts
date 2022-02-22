import {Component, Input, OnInit} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() planets?: Content;

  constructor() {
    //Theme Solar system / Planets
  }

  ngOnInit(): void {
  }
  logId(): void{
    console.log("id: ", this.planets?.id, " | title is: ", this.planets?.title);
  }
}
