import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { LokiTitlesComponent } from './loki-titles/loki-titles.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { BackgroundAnimationComponent } from './background-animation/background-animation.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LokiTitlesComponent,
    MyInfoComponent,
    BackgroundAnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
