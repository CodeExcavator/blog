
export class MsgItem{
  message:string;

  constructor(options?: any){
    options = options || {};
    this.message = options.message || null;
  }
}
