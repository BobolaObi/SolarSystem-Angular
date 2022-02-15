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
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
      type: "Planet"
    };
    this.item2 = {
      id: 1,
      title: 'Venus',
      description: "Venus is only the second-closest planet to the Sun but it is the hottest. It has a very thick atmosphere which traps the heat from the Sun, thus causing its temperature to rise. It got its name from the Roman goddess of love and beauty, whose Greek counterpart is Aphrodite.",
      creator: 'flexible',
      imgURL: "https://scitechdaily.com/images/Magellan-Venus-Surface.jpg"
    };
    this.item3 = {
      id: 2,
      title: 'Mars',
      description: "Mars is often dubbed the “Red Planet” because of the iron on its surface. It is the fourth planet from the Sun, located around 228 million km (142 million mi) away. This is a dry desert world that is also very cold.",
      creator: 'flexible',
      imgURL: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
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