import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';


@Injectable()

export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any[]>(this.url)
    .catch(this.handleError);
  }

  createPost(input) {
     return this.http.post(this.url, JSON.stringify(input))
      .map(response => response)
      .catch(this.handleError);
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
    .map(response => response)
    .catch(this.handleError);
  }

  deletePost(id) {
    console.log(id);
    return this.http.delete(this.url + '/' + id)
      .map(response => response)
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    if(error.status === 400) {
      return Observable.throw(new BadRequestError(error.json()));
    }

    if(error.status === 404) { 
      return Observable.throw(new NotFoundError());
    }

    return Observable.throw(new AppError(error));
  }
}