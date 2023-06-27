import { Component } from '@angular/core';
import { TimeService } from './time.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'getStarted';

  currentTime = this.timeService.getCurrentTime();

  factAboutACat$ = this.timeService.getCatFact().pipe(tap(data => console.log('Cat fact: ', data)), map(data => data.fact));

  randomDogImage$ = this.timeService.getDogImage();

  constructor(private timeService: TimeService) { 
    
  }
}
