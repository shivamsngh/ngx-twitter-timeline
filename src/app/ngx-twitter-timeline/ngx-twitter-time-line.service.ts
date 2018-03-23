import { Injectable } from '@angular/core';
import 'rxjs/Observable';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NgxTwitterTimeLineService {

  constructor() { }
  readonly TWITTER_SCRIPT_ID = 'twitter-wjs';
  readonly TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';


  LoadScript(): Observable<any> {
    return Observable.create(observer => {
      // START LOADING SCRIPT INTO DOM
      this.startScriptLoad();
      // WHEN TWITTER WIDGETS SCRIPT IS LOADED, THEN PASS ALONG....
      window['twttr'].ready
        (
        function onLoadTwitterScript(twttr) {
          observer.next(twttr);
          observer.complete();
        }
        );
    });
  }

  private startScriptLoad() {
    window['twttr'] = (function (d, s, id, url) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      const t = window['twttr'] || {};

      if (d.getElementById(id)) { return t; }

      js = d.createElement(s);
      js.id = id;
      js.src = url;
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];

      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    }(document, 'script', this.TWITTER_SCRIPT_ID, this.TWITTER_WIDGET_URL));
  }
}
