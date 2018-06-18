import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post, PostBody} from "../domain-classes";

@Injectable()
export class PostService {

  private snippetsURL: string;
  private stepsURL: string;
  private codeBlocksURL: string;
  private sharedURL: string;
  // private headers: Headers;

  constructor()
  {
    //this.snippetsURL = serviceConfig.actionUrl + 'api/snippets/';
    // this.headers = new Headers();
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Accept', 'application/json');
  }

  getPostsByCategory(id: string): Observable<Post[]> {

    let postBody = new PostBody();
    postBody.postText = "TEST BODY!";

    let post = new Post();
    post.postBody = [postBody];

    return Observable.create([post]);
  }

  /*
   searchSnippet(criteria: SnippetSearchCriteria): Observable<SearchResultsByCategory[]> {
     return this.authHttp.post(this.snippetsURL + 'search', criteria)
       .map((response: Response) => <SearchResultsByCategory[]>response.json() )
       .catch(this.handleError);
   }

   getSnippet(id: string): Observable<Snippet> {
     return this.authHttp.get(this.snippetsURL + id)
       .map((response: Response) => this.extractData(response))
       .catch(this.handleError);
   }

   editSnippet(snippet: Snippet) {
     return this.authHttp.put(this.snippetsURL + snippet._id, snippet).map((response: Response) => {
     }).catch(this.handleError);
   }


   createSnippet(snippet: Snippet): Observable<Snippet> {
       return this.authHttp.post(this.snippetsURL, snippet)
           .map((response: Response) => this.extractData(response))
           .catch(this.handleError);
   }


  createSnippet(categoryId: string): Observable<Snippet> {
    return this.authHttp.get(this.snippetsURL + 'create/' + categoryId)
      .map((response: Response) => this.extractData(response))
      .catch(this.handleError);
  }

  deleteSnippet(id: string){
    return this.authHttp.delete(this.snippetsURL + id ).map((response: Response) => {
    }).catch(this.handleError);
  }

  generateSharedUrl(id: string) {
    return this.authHttp.get(this.snippetsURL + 'generate/' + id).map((response: Response) => {
    }).catch(this.handleError);
  }

  clearSharedUrl(id: string) {
    return this.authHttp.get(this.snippetsURL +"clear/" + id).map((response: Response) => {
    }).catch(this.handleError);
  }
   */

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
