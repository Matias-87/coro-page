import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  @Component({ standalone: true, selector: 'app-loki-titles', template: ''})
  class LokiTitlesStubComponent { }

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [LokiTitlesStubComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portafolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portafolio');
  });
});
