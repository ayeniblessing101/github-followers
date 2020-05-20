import { AppError } from './../common/app-error';
import { GithubFollowersService } from './github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

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

@Component({
    selector: 'app-github-followers',
    templateUrl: './github-followers.component.html',
    styleUrls: ['./github-followers.component.css']
})

export class GithubFollowersComponent implements OnInit {
    allFollowers: IFollower[] = [];

    constructor(private githubFollowersService: GithubFollowersService, 
                private route: ActivatedRoute, 
                private router: Router) {}

    ngOnInit() {
        Observable.combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
        .switchMap(combined => {
            const id = combined[0].get('userId');
            const page = combined[1].get('page');

            return this.githubFollowersService.getFollowers()
        })
        .subscribe(followers => this.allFollowers = followers);
    }

    submit() {
        this.router.navigate(['/followers'], {
            queryParams: { page: 1, order: 'newest'}
        });
    }
}
