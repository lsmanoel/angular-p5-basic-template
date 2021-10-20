import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { P5wrapperComponent } from './p5wrapper/p5wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    P5wrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
