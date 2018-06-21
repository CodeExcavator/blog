import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, ActivatedRoute, Params, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import {CategoryService, PostService} from "../services";
import {Category, Post} from "../domain-classes";

@Component({
  selector: 'category-posts',
  templateUrl: './category-posts.component.html',
})
export class CategoryPostsComponent implements OnInit{

  category: Category;
  posts: Post[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private postService: PostService,
              private categoryService: CategoryService,) {

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
          this.posts = posts;
        },
        err => console.error(err),
        () => console.log('Observer (Posts) got a complete notification'));
      }
    );
  }
}
