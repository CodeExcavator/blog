export class PostBody{
  textType: number;
  postText: string;

  constructor(options?: any){
    options = options || {};
    this.textType = options.textType || 0;
    this.postText = options.postText || "";
  }
}
