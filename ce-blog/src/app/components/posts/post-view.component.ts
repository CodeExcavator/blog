import { Component } from '@angular/core';

import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TopBarComponent } from '../top-bar'

@Component({
  selector: 'post-view',
  templateUrl: './post-view.component.html',
})
export class PostViewComponent{

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

}
