export class Category{
  id: string;
  title:string;

  constructor(options?: any){
    options = options || {};
    this.id = options.id || null;
    this.title = options.title || "New category";
  }
}
