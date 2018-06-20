import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, ActivatedRoute, Params, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import {PostService} from "../services";
import {Post} from "../domain-classes";
import {pipe} from "rxjs/internal-compatibility";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'category-posts',
  templateUrl: './category-posts.component.html',
})
export class CategoryPostsComponent implements OnInit{

  posts: Post[];
  errorMessage: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private postService: PostService,) {

  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      var test = this.postService.getPostsByCategory(params.get('categoryId'));
      test.subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        },
          err => console.error(err),
          () => console.log('Observer got a complete notification'))
        }
      );



/*
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.postService.getPostsByCategory(params.get('categoryId'))))
      .subscribe(
        (posts: Post[]) => {

          console.log("AAA");
          console.log(this.posts);
          this.posts = posts
        },
  error => this.errorMessage = <any>error,
  () => console.log('Posts Not found!'));
  */
  }
}
