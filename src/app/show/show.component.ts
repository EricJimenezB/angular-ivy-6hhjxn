import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input()
  character:any;
  characteraux:string;


  constructor() {
    
   }

  ngOnInit() {
    this.characteraux = JSON.stringify(this.character);
  }
  resetValue(){
    console.log(this.character===this.characteraux);
    console.log(this.characteraux);
    this.character = JSON.parse(this.characteraux);
  }
}