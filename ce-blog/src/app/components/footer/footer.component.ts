import { Component } from '@angular/core';

import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'footer-view',
  templateUrl: './footer.component.html',
})
export class FooterComponent{

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

}
