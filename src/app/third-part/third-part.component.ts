import { Component } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-third-part',
  templateUrl: './third-part.component.html',
  styleUrls: ['./third-part.component.scss']
})
export class ThirdPartComponent {

  currentTime = this.timeService.getCurrentTime();

  constructor(private timeService: TimeService) {
  }
}
