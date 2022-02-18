import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  planets: Content[];

  constructor() {
    this.planets = [{
      id: 0,
      title: 'Mercury',
      description: "Mercury has been known for a long time because it is visible to the naked eye. Galileo Galilei made the first telescopic observation of this small planet in the 17th century. It was named after the swift Roman god of commerce.",
      creator: 'flexible',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
      type: "Planet"
    },
     {
      id: 1,
      title: 'Venus',
      description: "Venus is only the second-closest planet to the Sun but it is the hottest. It has a very thick atmosphere which traps the heat from the Sun, thus causing its temperature to rise. It got its name from the Roman goddess of love and beauty, whose Greek counterpart is Aphrodite.",
      creator: 'flexible',
      imgURL: "https://scitechdaily.com/images/Magellan-Venus-Surface.jpg"
    },
    {
      id: 2,
      title: 'Mars',
      description: "Mars is often dubbed the “Red Planet” because of the iron on its surface. It is the fourth planet from the Sun, located around 228 million km (142 million mi) away. This is a dry desert world that is also very cold.",
      creator: 'flexible',
      imgURL: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      type: 'Planet'
    }
    ,
    {
      id: 3,
      title: 'Earth',
      description: "Mars is often dubbed the “Red Planet” because of the iron on its surface. It is the fourth planet from the Sun, located around 228 million km (142 million mi) away. This is a dry desert world that is also very cold.",
      creator: 'flexible',
      imgURL: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      type: 'Planet'
    }
    ,
    {
      id: 4,
      title: 'Jupiter',
      description: "Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.",
      creator: 'flexible',
      imgURL: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      type: 'Planet'
    }
    ,
    {
      id: 5,
      title: 'Saturn',
      description: "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.",
      creator: 'flexible',
      imgURL: 'https://solarsystem.nasa.gov/system/resources/detail_files/2490_stsci-h-p1943a-f_1200.jpg',
      type: 'Planet'
    }
    ,
    {
      id: 6,
      title: 'Uranus',
      description: "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.",
      creator: 'flexible',
      imgURL: 'https://solarsystem.nasa.gov/system/feature_items/images/88_carousel_uranus.jpg',
      type: 'Planet'
    }];

   };

  ngOnInit(): void {
  }

}
