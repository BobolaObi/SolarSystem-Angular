import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  list: ContentList;
  item1: Content;
  item2: Content;
  item3: Content;

  constructor() {
    //Theme Solar system / Planets 
    this.item1 = {
      id: 0,
      title: 'Mercury',
      description: "Mercury has been known for a long time because it is visible to the naked eye. Galileo Galilei made the first telescopic observation of this small planet in the 17th century. It was named after the swift Roman god of commerce.",
      creator: 'flexible',
      imgURL: 'https://upload.https://theplanets.org/123/2021/11/Mercury.png.org/wikipedia/en/5/5b/Agumonappearance.png',
      type: "Planet"
    };
    this.item2 = {
      id: 1,
      title: 'Venus',
      description: "Venus is only the second-closest planet to the Sun but it is the hottest. It has a very thick atmosphere which traps the heat from the Sun, thus causing its temperature to rise. It got its name from the Roman goddess of love and beauty, whose Greek counterpart is Aphrodite.",
      creator: 'flexible',
      imgURL: 'https://https://theplanets.org/123/2021/11/Venus.png.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg'
    };
    this.item3 = {
      id: 2,
      title: 'Mars',
      description: "Mars is often dubbed the “Red Planet” because of the iron on its surface. It is the fourth planet from the Sun, located around 228 million km (142 million mi) away. This is a dry desert world that is also very cold.",
      creator: 'flexible',
      imgURL: 'https://upload.https://theplanets.org/123/2021/11/Mars.jpg.org/wikipedia/it/thumb/d/d5/Biyomon.png/390px-Biyomon.png',
      type: 'Planet'
    };
    this.list = new ContentList();
    this.list.addContent(this.item1);
    this.list.addContent(this.item2);
    this.list.addContent(this.item3);
    // console.log("Looking at the content list ", this.list.contentArray, " and the length is: ", this.list.arrayLength());
    // console.log("The html is: ", this.list.generateHtml(0));

  }

  ngOnInit(): void {
  }

}