import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style, keyframes} from '@angular/animations'

const fontFamilies: string[] = ['Griffy', 'Pixelfy Sans', 'Agbalumo', 'Bebas Neue', 'Kenia', 'Shadows Into Light']

@Component({
  selector: 'app-loki-titles',
  templateUrl: './loki-titles.component.html',
  styleUrls: ['./loki-titles.component.scss'],
  animations: [
    trigger('changeFont1', [
      state('end', style({
        'font-family': 'Roboto'
      })),
      transition('* => end', [
        animate('1.5s', keyframes ([
          style({ 'font-family': fontFamilies[Math.floor(Math.random() * 6)] }),
          style({ 'font-family': fontFamilies[Math.floor(Math.random() * 6)]}),
          style({ 'font-family': fontFamilies[Math.floor(Math.random() * 6)]})
        ]))
      ])
    ]),
    trigger('changeFont2', [
      state('end', style({
        'font-family': 'Roboto'
      })),
      transition('* => end', [
        animate('1.5s', keyframes ([
          style({ 'font-family': fontFamilies[Math.floor(Math.random() * 6)] }),
          style({ 'font-family': fontFamilies[Math.floor(Math.random() * 6)]}),
          style({ 'font-family': fontFamilies[Math.floor(Math.random() * 6)]})
        ]))
      ])
    ])
  ]
})
export class LokiTitlesComponent implements OnInit{
  fontBoolean = true;

  ngOnInit(): void {
    this.fontBoolean = false;
  }
}
