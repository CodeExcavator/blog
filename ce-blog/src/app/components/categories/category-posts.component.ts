import { Component } from '@angular/core';

import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TopBarComponent } from '../top-bar'

@Component({
  selector: 'category-posts',
  templateUrl: './category-posts.component.html',
})
export class CategoryPostsComponent{

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

}
