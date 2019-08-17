import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { LikableCommentElement } from './app/likable-comment/likable-comment.element';

if (environment.production) {
  enableProdMode();
}

customElements.define('likable-comment', LikableCommentElement);
