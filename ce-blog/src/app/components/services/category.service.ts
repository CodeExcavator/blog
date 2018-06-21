import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Category} from "../domain-classes";
import {of} from "rxjs/internal/observable/of";
import {map} from "rxjs/operators";

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient)
  {
    //this.snippetsURL = serviceConfig.actionUrl + 'api/snippets/';
  }

  getCategoryById(id: string):Observable<Category>{

    //Mock Data
    var categories: Category[];

    categories = [
      new Category({id:"1", title:"C#"}),
      new Category({id:"2", title:"Angular"})
    ];
    //-------------------------
    let category = categories.filter(x => x.id == id);

    return of(category).pipe(
      map(res => res[0]));
  }

  private extractData(res: Response) {
    const body = res.json();
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
