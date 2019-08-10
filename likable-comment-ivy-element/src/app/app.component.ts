import { Component, Input, ɵrenderComponent, ɵdetectChanges, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  @Input () text: string;
  @Input () author: string;
  @Input () likes: number;
  @Input () likedByMe: boolean;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    import('./likable-comment/likable-comment.component')
    .then(({ LikableCommenComponent }) => {
      const component =  ɵrenderComponent(LikableCommenComponent, {host: this.element.nativeElement});
      component.text = this.text;
      component.author = this.author;
      component.likes = this.likes;
      component.likedByMe = this.likedByMe;
      ɵdetectChanges(component);
    });
  }
}


