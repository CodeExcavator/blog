import { Component } from '@angular/core';

import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TopBarComponent } from '../top-bar'

@Component({
  selector: 'categories-view',
  templateUrl: './categories-view.component.html',
})
export class CategoriesViewComponent{

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

}
