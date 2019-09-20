import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imageSize = 100;
  private lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    console.log('scrolling');
});
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const value = window.pageYOffset;
    console.log(value);
    const direction = this._getScrollDirection(value);
    if (direction === 'up' && this.imageSize < 100) {
      this.imageSize = this.imageSize + 1;
      return;
    }

    if (direction === 'down' && value > 100) {
      this.imageSize = this.imageSize - 1;
    }
  }

  private _getScrollDirection(value: number): string {
    let dir = '';
    if (value > this.lastScrollTop) {
      dir = 'down';
    } else {
      dir = 'up';
    }
    this.lastScrollTop = value;
    return dir;
  }
}
