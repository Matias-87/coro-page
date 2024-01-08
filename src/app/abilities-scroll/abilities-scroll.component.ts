import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities-scroll',
  templateUrl: './abilities-scroll.component.html',
  styleUrls: ['./abilities-scroll.component.scss']
})
export class AbilitiesScrollComponent implements OnInit {
  svgPaths: String[][] = [
    ['./assets/svg/icon1.svg', 'HTML'],
    ['./assets/svg/icon2.svg', 'CSS'],
    ['./assets/svg/icon3.svg', 'JavaScript'],
    ['./assets/svg/icon4.svg', 'Sass'],
    ['./assets/svg/icon5.svg', 'Bootstrap'],
    ['./assets/svg/icon6.svg', 'TypeScript'],
    ['./assets/svg/icon7.svg', 'Angular']
  ];

  ngOnInit(): void {
    for (let i = 0; i < 2; i++) {
      this.svgPaths.forEach(path => {
        this.svgPaths.push(path);
      });
    }
  }
}
