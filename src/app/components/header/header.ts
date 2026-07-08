import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    this.menuOpen = false;

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  }
}
