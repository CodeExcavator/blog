import { Component } from '@angular/core';

import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TopBarComponent } from '../top-bar'

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent{

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

}
