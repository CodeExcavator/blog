export class SubscribeFormModel{
  email: string;
  firstName: string;
  lastName: string;

  constructor(options?: any){
    options = options || {};
    this.email = options.email || "";
    this.firstName = options.firstName || "";
    this.lastName = options.lastName || "";
  }
}
