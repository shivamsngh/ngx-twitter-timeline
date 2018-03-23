import { Component, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
import { NgxTwitterTimeLineService } from './ngx-twitter-time-line.service';

@Component({
  selector: 'ngx-twitter-timeline',
  template: ``
})
export class NgxTwitterTimelineComponent implements OnInit, AfterViewInit {

  @Input() dataSrc: object;
  @Input() opts: object;

  constructor(private element: ElementRef, private ng4TwitterTimelineService: NgxTwitterTimeLineService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // MAKE SURE TWITTER WIDGET SCRIPT IS LOADED IN HEAD...
    this.ng4TwitterTimelineService.LoadScript().subscribe
      (
      // SUCCESS, WE HAVE TWITTER WIDGETS JS FILE LOADED...
      twttr => {
        const nativeElement = this.element.nativeElement;

        window['twttr'].widgets.createTimeline(this.dataSrc, nativeElement, this.opts).then
          (
          function success(embed) {
            // console.log('Created tweet widget: ', embed);
          }
          ).catch
          (
          function creationError(message) {
            // console.log('Could not create widget: ', message);
          }
          );
      },

      // ERROR
      err => {
        console.log('****  ERROR LOADING TWITTER WIDGET', err);
      },

      // COMPLETE
      () => {
      }
      );
  }

  private onTwitterLoaded(twttr) {
    console.log('TWITTER LOADED YO', twttr);
  }

}
