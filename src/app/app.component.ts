import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aniversary';
  @ViewChild('navBurger', { static: false }) navBurger: ElementRef;
  @ViewChild('navMenu', { static: false }) navMenu: ElementRef;




  toggleNavbar() {
    const navDrop = document.querySelector('#navDrop');
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
    navDrop.classList.remove('is-active');
  }

}
