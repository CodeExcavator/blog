export class Category{
  _id: string;
  title:string;

  constructor(options?: any){
    options = options || {};
    this._id = options._id || null;
    this.title = options.title || "New category";
  }
}
