import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { LokiTitlesComponent } from './loki-titles/loki-titles.component';
import { AnimatedLineComponent } from './animated-line/animated-line.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { MyInfoComponent } from './my-info/my-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LokiTitlesComponent,
    AnimatedLineComponent,
    AbilitiesComponent,
    MyInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
