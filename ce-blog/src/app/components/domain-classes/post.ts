import {PostText} from "./post-body";

export class Post{
  _id: string;
  title:string;
  createdDate: Date;

  postBody: PostBody[];

  constructor(options?: any){
    options = options || {};
    this._id = options._id || null;
    this.title = options.title || "New post";
  }
}
