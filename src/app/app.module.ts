import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './myservice.service';
import { ShowComponent } from './show/show.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ShowComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MyserviceService]
})
export class AppModule { }
