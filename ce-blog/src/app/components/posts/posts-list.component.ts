import { Component, Directive } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
// import { SideBarComponent } from '../side-bar'
import { TopBarComponent } from '../top-bar'

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
})
export class PostsListComponent{

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

  getParameterByName(name:any) {

  }

}
