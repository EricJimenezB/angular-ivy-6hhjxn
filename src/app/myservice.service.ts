import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class MyserviceService {
  url: string;
  constructor(private getData: HttpClient) {
    this.url = "https://rickandmortyapi.com/api/character/";
   }

   getCharacter(): Observable<any>{
     return this.getData.get<any>(this.url);
   }

}