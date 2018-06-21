import {Component, OnInit} from '@angular/core';

import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TopBarComponent } from '../top-bar'
import {Category, Post} from "../domain-classes";
import {CategoryService, PostService} from "../services";

@Component({
  selector: 'post-view',
  templateUrl: './post-view.component.html',
})
export class PostViewComponent implements OnInit{

  category: Category;
  post: Post;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private postService: PostService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.categoryService.getCategoryById(params.get('categoryId'))
        .subscribe(
          (category: Category) => {
            this.category = category;
          },
          err => console.error(err),
          () => console.log('Observer (Category) got a complete notification'));

        this.postService.getPostsByCategory(params.get('categoryId'))
          .subscribe(
            (posts: Post[]) => {
              this.post = posts.filter(x => x.id == params.get('postId'))[0];
            },
            err => console.error(err),
            () => console.log('Observer (Post) got a complete notification'));
      }
    );
  }
}
