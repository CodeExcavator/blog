import { Component } from '@angular/core';

import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TopBarComponent } from '../top-bar'

@Component({
  selector: 'post-list-view',
  templateUrl: './post-list-view.component.html',
})
export class PostListViewComponent{

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

}
