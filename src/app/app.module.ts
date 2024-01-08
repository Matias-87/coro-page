import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { LokiTitlesComponent } from './loki-titles/loki-titles.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { AbilitiesScrollComponent } from './abilities-scroll/abilities-scroll.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LokiTitlesComponent,
    MyInfoComponent,
    AbilitiesScrollComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
