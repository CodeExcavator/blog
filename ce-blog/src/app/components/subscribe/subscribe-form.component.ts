import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import {MsgItem, SubscribeFormModel} from "../domain-classes";

@Component({
  selector: 'subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styles: ['subscribe-form.component.css']
})
export class SubscribeFormComponent{

  @Input()
  formData: SubscribeFormModel;
  @Output()
  formSubmitted = new EventEmitter<MsgItem>();

  constructor(private router: Router,
              private route: ActivatedRoute) {

    this.formData = new SubscribeFormModel();
  }

  doSubscribe() {
    if(this.formData.firstName != "" && this.formData.lastName != "" && this.formData.email != "") {
      let msg = "A new Subscription! " + this.formData.firstName + " " + this.formData.lastName + " " + this.formData.email;
      this.formSubmitted.emit(new MsgItem({message: msg}));
    }
  }
}
