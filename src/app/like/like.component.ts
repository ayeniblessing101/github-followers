import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent {
  @Input() isLiked: boolean;
  @Input() likesCount: number;
  @Output() change = new EventEmitter();
  constructor() {}

  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
    //this.change.emit(this.isLiked);
    // if(this.isLiked) {
    //   this.likesCount = this.likesCount + 1;
    // } else {
    //   this.likesCount = this.likesCount - 1;
    // }
  }
}