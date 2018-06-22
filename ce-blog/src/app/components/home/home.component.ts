import {Component, ViewContainerRef} from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import {MsgItem, SubscribeFormModel} from "../domain-classes";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})
export class HomeComponent{

    staticAlertClosed = true;
    alertMsg = "";
    autoData: SubscribeFormModel;

    constructor(private router: Router,
        private route: ActivatedRoute) {

      this.autoData = new SubscribeFormModel();
    }

  showCategory(categoryId: number){
    this.router.navigate(['/category-posts/' + categoryId]);
  }

  autocomplete(){
    this.autoData.email = "my@gmail.com";
    this.autoData.firstName = "My Fisrt Name";
    this.autoData.lastName = "My Last Name";
  }

  clear(){
    this.autoData.email = "";
    this.autoData.firstName = "";
    this.autoData.lastName = "";
  }

  onFormSubmitted(msg: MsgItem) {
      if(msg.message != "") {
        this.alertMsg = "Message from Subscription Component:\n" + msg.message;
        this.staticAlertClosed = false;
      }
  }
}
