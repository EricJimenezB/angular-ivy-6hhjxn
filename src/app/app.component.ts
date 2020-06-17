import { Component, VERSION } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  characters: Array<any>;
  constructor(private getData: MyserviceService){
    getData.getCharacter().subscribe(item => {
      this.characters = item.results;
      console.log(item);
    });
  }
}
