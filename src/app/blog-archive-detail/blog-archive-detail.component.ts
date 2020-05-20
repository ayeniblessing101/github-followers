import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-blog-archive-detail',
    templateUrl: './blog-archive-detail.component.html',
    styleUrls: ['./blog-archive-detail.component.css']
})

export class BlogArchiveDetailComponent implements OnInit {
    yearParam: number;
    monthParam: number;
    constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

    ngOnInit() {
        const params = this.activatedRoute.snapshot.paramMap;
        this.yearParam = +params.get('year');
        this.monthParam = +params.get('month');
    }

    back() {
        this.route.navigate(['/archives']);
    }
 }
