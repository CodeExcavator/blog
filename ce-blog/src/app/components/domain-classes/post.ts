import {PostBody} from "./post-body";

export class Post{
  id: string;
  title:string;
  createdDate: Date;

  postBody: PostBody[];

  constructor(options?: any){
    options = options || {};
    this.id = options.id || null;
    this.title = options.title || "New category";
  }
}
