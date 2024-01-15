import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quayso';
  arrayNumber: Array<string> = [];
  constructor() {}

  play() {
    const value = this.getRandomArbitrary(1, 999).toString().padStart(3, '0');
    const el = document.querySelectorAll('.numbers__window__digit');
    el.forEach((element) => {
      element.classList.remove('animation-number');
    });
    this.arrayNumber = value.toString().split('');
    console.log(this.arrayNumber);
    setTimeout(() => {
      el.forEach((element) => {
        element.classList.add('animation-number');
      });
    }, 100);
  }
  getRandomArbitrary(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the
  }
}
