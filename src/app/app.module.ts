import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LokiTitlesComponent } from './loki-titles/loki-titles.component';
import { AnimatedLineComponent } from './animated-line/animated-line.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LokiTitlesComponent,
    AnimatedLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
