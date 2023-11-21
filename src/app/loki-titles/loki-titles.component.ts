import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style, keyframes} from '@angular/animations'
import { Observable, Subscription, concat, interval, map, of } from 'rxjs';
import { take } from 'rxjs';

@Component({
  selector: 'app-loki-titles',
  templateUrl: './loki-titles.component.html',
  styleUrls: ['./loki-titles.component.scss']
})
export class LokiTitlesComponent implements OnInit, OnDestroy{
  fontSubscribe?: Subscription;

  fontBoolean = true;

  font1: string | undefined;
  font2: string | undefined;
  font3: string | undefined;
  font4: string | undefined;
  font5: string | undefined;
  font6: string | undefined;

  fonts: string[] = ['Roboto', 'Griffy', 'Pixelify Sans', 'Dancing Script', 'Agbalumo', 'Black Ops One', 'Bebas Neue', 'Monoton', 'Kenia', 'Butcherman', 'Shadows Into Light'];
  fontsLength = this.fonts.length - 1;

  fontsInterval = interval(1000).pipe(
    take(6),
    map(() => Math.floor(Math.random() * this.fontsLength) + 1)
  );

  lastFont = of(0);

  fontsObservable = concat(this.fontsInterval, this.lastFont);

  ngOnInit(): void {
    this.fontBoolean = false;
    this.changeFonts();
  }

  ngOnDestroy(): void {
    this.fontSubscribe?.unsubscribe;
  }

  changeFonts() {
    this.fontSubscribe = this.fontsObservable.subscribe(value => {
      this.font1 = this.fonts[value];
      this.font2 = this.fonts[value === 0 ? value : Math.floor(Math.random() * this.fontsLength) + 1];
      this.font3 = this.fonts[value === 0 ? value : Math.floor(Math.random() * this.fontsLength) + 1];
      this.font4 = this.fonts[value === 0 ? value : Math.floor(Math.random() * this.fontsLength) + 1];
      this.font5 = this.fonts[value === 0 ? value : Math.floor(Math.random() * this.fontsLength) + 1];
      this.font6 = this.fonts[value === 0 ? value : Math.floor(Math.random() * this.fontsLength) + 1];
    })
  }
}
