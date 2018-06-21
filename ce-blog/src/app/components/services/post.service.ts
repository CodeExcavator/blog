import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Category, Post} from "../domain-classes";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs/internal/observable/of";
import {map} from "rxjs/operators";

@Injectable()
export class PostService {

  constructor(private http: HttpClient)
  {

  }

  getPostsByCategory(id: string): Observable<Post[]> {
    //Load from json file, or an API endpoint
    return this.http.get<Post[]>("assets/data/posts/" + id + ".data.json");
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      //const err = body.error || JSON.stringify(body);
      //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
