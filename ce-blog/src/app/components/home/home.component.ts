import { Component } from '@angular/core';

import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TopBarComponent } from '../top-bar'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})
export class HomeComponent{

    constructor(private router: Router,
        private route: ActivatedRoute) {

    }

  showCategory(categoryId: number){
    this.router.navigate(['/category-posts/' + categoryId]);
  }
}
