import { enableProdMode, ɵrenderComponent } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { LikableCommenComponent } from './app/likable-comment/likable-comment.component';

if (environment.production) {
  enableProdMode();
}


const app = customElements.define('likable-comment', AppComponent);

