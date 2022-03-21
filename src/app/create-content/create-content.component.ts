import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  newContent: Content;
  temptags: string = "";
  tempid: string = "";
  errorMessage: string = "";
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  constructor() {
    this.newContent = { id: 10, title: '', description: '', creator: '' };
  }

  ngOnInit(): void {
  }

  addItemToParent(): void {
    var addContentPromise = new Promise((success, fail) => {
      if (!this.tempid || !this.newContent.title || !this.newContent.description || !this.newContent.creator) {
        fail("Please enter the required fields to continue");
      }

      this.newContent.tags = this.temptags ? this.temptags.split(",") : [];
      this.newContent.id = parseInt(this.tempid);
      this.newContentEvent.emit(this.newContent);
      success("Content added successfully, id: " + this.newContent.id + " title is: " + this.newContent.title);
    });
    addContentPromise.then(msg => {
      console.log(msg);
      this.newContent = { id: 10, title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
      this.temptags = "";
      this.tempid = "";
      this.errorMessage = "";
    }).catch(msg => { //Error message
      this.errorMessage = msg;
    });
  }
}
