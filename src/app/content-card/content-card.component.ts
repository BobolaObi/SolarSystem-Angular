import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent implements OnInit {

  @Input() content?: Content;
  constructor() { }
  ngOnInit(): void {
  }

  logId(): void{
    console.log("id: ", this.content?.id, " | title is: ", this.content?.title);
  }
}