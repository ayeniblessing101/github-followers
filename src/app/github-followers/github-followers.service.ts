import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

import { AppError } from '../common/app-error';

interface IFollower {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

@Injectable()

export class GithubFollowersService {
  url = 'https://api.github.com/users/ayeniblessing101/followers';
  constructor(private http: HttpClient) {}

  getFollowers() {
    return this.http.get<IFollower[]>(this.url)
    .map(response => response)
    .catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    return Observable.throw(new AppError(error));
  }
}
