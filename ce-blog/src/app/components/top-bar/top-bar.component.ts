import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'top-bar-view',
    templateUrl: './top-bar.component.html',
    styles: ['top-bar.component.css']
})
export class TopBarComponent {

    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

}
