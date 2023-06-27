import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CommonModule } from '@angular/common';
import { SecondThingComponent } from './second-thing/second-thing.component';
import { ThirdPartComponent } from './third-part/third-part.component';
import { TimeService } from './time.service';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    SecondThingComponent,
    ThirdPartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
