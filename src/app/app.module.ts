import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CommonModule } from '@angular/common';
import { SecondThingComponent } from './second-thing/second-thing.component';
import { ThirdPartComponent } from './third-part/third-part.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    SecondThingComponent,
    ThirdPartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
