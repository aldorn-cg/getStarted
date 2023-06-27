import { Component } from '@angular/core';
import { TimeService } from '../time.service';

const timeServiceMock: TimeService = {
  getCurrentTime() {
    return 'testTimeValue'
  },
}

@Component({
  selector: 'app-second-thing',
  templateUrl: './second-thing.component.html',
  styleUrls: ['./second-thing.component.scss'],
  providers: [
    {provide: TimeService, useValue: timeServiceMock}
  ]
})
export class SecondThingComponent {

  currentTime = this.timeService.getCurrentTime();

  constructor(private timeService: TimeService) {
  }
}
