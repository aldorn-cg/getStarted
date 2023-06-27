import { Component } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'getStarted';

  currentTime = this.timeService.getCurrentTime();

  constructor(private timeService: TimeService) {
  }
}
