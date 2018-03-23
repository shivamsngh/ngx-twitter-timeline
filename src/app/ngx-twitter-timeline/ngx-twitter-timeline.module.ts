import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTwitterTimelineComponent } from './ngx-twitter-timeline.component';
import { NgxTwitterTimeLineService } from './ngx-twitter-time-line.service';

export { NgxTwitterTimeLineService } from './ngx-twitter-time-line.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxTwitterTimelineComponent],
  exports: [NgxTwitterTimelineComponent],
  providers: [NgxTwitterTimeLineService]
})
export class NgxTwitterTimelineModule { }
