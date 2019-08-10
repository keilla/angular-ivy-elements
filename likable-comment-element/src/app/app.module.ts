import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { LikableCommentComponent } from './likable-comment.component';

@NgModule({
  declarations: [
    LikableCommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [LikableCommentComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(LikableCommentComponent, { injector });
    customElements.define('likable-comment', el);
  }
  ngDoBootstrap() { }
}
