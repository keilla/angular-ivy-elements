import {
  Component,
  Input,
  ɵrenderComponent as renderComponent,
  ɵdetectChanges as detectChanges,
  ElementRef,
  ViewEncapsulation
}
from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @Input() text: string;
  @Input() author: string;
  @Input() likes: number;
  @Input() liked: boolean;
  component: any;

  constructor(public element: ElementRef) {
    import('./likable-comment/likable-comment.component')
      .then(({ LikableCommenComponent }) => {
        this.component = renderComponent(LikableCommenComponent, { host: this.element.nativeElement });
        this.component.text = this.text;
        this.component.author = this.author;
        this.component.likes = this.likes;
        this.component.liked = this.liked;
        detectChanges(this.component);
      });
  }
}


