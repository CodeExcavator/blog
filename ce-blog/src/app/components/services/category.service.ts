import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  private snippetsURL: string;
  private stepsURL: string;
  private codeBlocksURL: string;
  private sharedURL: string;
  // private headers: Headers;

  constructor(private http: Http)
  {
    //this.snippetsURL = serviceConfig.actionUrl + 'api/snippets/';
  }

  private extractData(res: Response) {
    // console.log('RE: ' + res);
    const body = res.json();
    // console.log('body: ' + body);
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
