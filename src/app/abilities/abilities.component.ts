import { Component, HostListener } from '@angular/core';
import { stainAnimation } from 'src/animations/animations';

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

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.scrollY;
    // this.progress = Math.floor(scrollPosition);
    this.progress = Math.floor(scrollPosition / (document.body.scrollHeight - window.innerHeight) * 100);
    console.log(this.progress)
  }

  getAnimationState(progress: number): string {
    switch (true) {
      case progress >= 100 :
        return 'frame5';
      case progress >= 80 :
        return 'frame4';
      case progress >= 60 :
        return 'frame3';
      case progress >= 40 :
        return 'frame2';
      case progress >= 15 : 
        return 'frame1';
      default:
        return 'frame0';
    }
  }

}
