import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostComponent implements OnInit {
  posts: any[] = [];
  constructor(private postService: PostService) { }

   ngOnInit() {
     this.postService.getPosts().subscribe(
        posts => {
          this.posts = posts;
      });
   }

   createPost(input: HTMLInputElement) {
     const post = { title: input.value };
     this.posts.splice(0, 0, post);

     input.value = '';
     this.postService.createPost(input)
      .subscribe(
        newPost => {
        post['id'] = newPost['id'];
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadRequestError){
           alert('....');
          // this.form.setErrors(error.originalError);
        }
      });
   }

   updatePost(post) {
     this.postService.updatePost(post)
      .subscribe(
        updatedPost => console.log(updatedPost));
   }

   deletePost(post) {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      this.postService.deletePost(1000000)
      .subscribe(
       null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          console.log('post deleted already');
        }
      });
   }
}
