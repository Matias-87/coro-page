import { Component, HostListener } from '@angular/core';
import { stainAnimation } from 'src/animations/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'],
  animations: [
    stainAnimation
  ]
})
export class AbilitiesComponent {
  progress = 0;
  abilities = [
    { iconClass: 'fa-brands fa-html5', name: 'HTML' },
    { iconClass: 'fa-brands fa-css3-alt', name: 'CSS' },
    { iconClass: 'fa-brands fa-js', name: 'JavaScript' },
    { iconClass: 'fa-brands fa-sass', name: 'Sass' },
    { iconClass: 'fa-brands fa-bootstrap', name: 'Bootstrap' },
    { svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 256 256"><g fill="#D6FFF3" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M45,4h-40c-0.553,0-1,0.448-1,1v40c0,0.552 0.447,1 1,1h40c0.553,0 1,-0.448 1,-1v-40c0,-0.552 -0.447,-1 -1,-1zM29,26.445h-5v15.555h-4v-15.555h-5v-3.445h14zM30.121,41.112v-4.158c0,0 2.271,1.712 4.996,1.712c2.725,0 2.62,-1.782 2.62,-2.026c0,-2.586 -7.721,-2.586 -7.721,-8.315c0,-7.791 11.25,-4.717 11.25,-4.717l-0.14,3.704c0,0 -1.887,-1.258 -4.018,-1.258c-2.131,0 -2.9,1.013 -2.9,2.096c0,2.795 7.791,2.516 7.791,8.141c0.001,8.664 -11.878,4.821 -11.878,4.821z"></path></g></g></svg>', name: 'TypeScript'},
    { iconClass: 'fa-brands fa-angular', name: 'Angular' }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.scrollY;
    // this.progress = Math.floor(scrollPosition);
    this.progress = Math.floor(scrollPosition / (document.body.scrollHeight - window.innerHeight) * 100);
    console.log(this.progress)
  }

  getAnimationState(progress: number): string {
    switch (true) {
      case progress >= 95:
        return 'frame5';
      case progress >= 80:
        return 'frame4';
      case progress >= 60:
        return 'frame3';
      case progress >= 40:
        return 'frame2';
      case progress >= 15:
        return 'frame1';
      default:
        return 'frame0';
    }
  }

  sanitize(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

}
