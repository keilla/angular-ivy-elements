import {
  ɵrenderComponent as renderComponent,
  ɵdetectChanges as detectChanges
} from '@angular/core';
import { LikableCommenComponent } from './likable-comment/likable-comment.component';

export class AppComponent extends HTMLElement {

  component: LikableCommenComponent;
  text: string;
  author: string;
  likes: number;
  liked: boolean;

  constructor() {
    super();
    setTimeout(() => {
      this.component = renderComponent(LikableCommenComponent, { host: this });
      this.component.text = this.text;
      this.component.author = this.author;
      this.component.likes = this.likes;
      this.component.liked = this.liked;
      detectChanges(this.component);
    });
  }

  static get observedAttributes() {
    return ['text', 'author', 'likes', 'liked'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'text':
        this.text = newValue;
        break;
      case 'author':
        this.author = newValue;
        break;
      case 'likes':
        this.likes = newValue;
        break;
      case 'liked':
        this.liked = newValue;
        break;
    }

  }
}


