import { Component, HostListener } from '@angular/core';
import { scrollAnimation } from 'src/animations/animations';
@Component({
  selector: 'app-animated-line',
  templateUrl: './animated-line.component.html',
  styleUrls: ['./animated-line.component.scss'],
  animations: [
    scrollAnimation,
  ]
})
export class AnimatedLineComponent {
  progress = 0;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.scrollY;
    this.progress = Math.floor(scrollPosition);
    console.log(this.progress)
  }

  getAnimationState(progress: number): string {
    switch (true) {
      case progress >= 100 : 
        return 'frame1';
      default:
        return 'frame0';
    }
  }
}
