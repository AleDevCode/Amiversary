import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit, AfterViewInit {

  // Swiper del slide
mySwiper: Swiper;

constructor() { }

ngOnInit() {
}

// Método para configurar el slide después de la carga de los componentes HTML
ngAfterViewInit(): void {
  // Swiper configuraciones
  this.mySwiper = new Swiper('.swiper-container', {
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    speed: 3000,
    autoplay: {
      disableOnInteraction: true,
      delay: 5000
    },
    observer: true,
    loop: true,
    // Método que permite el reinicio del slide
  });
}



}
