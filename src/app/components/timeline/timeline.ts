import { Component, Input } from '@angular/core';
import { TimelineConfig } from 'src/app/models/timeline.config';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss']
})

export class TimelineComponent {

  @Input() config!: TimelineConfig;
}
