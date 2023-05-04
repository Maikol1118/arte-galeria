import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider-imagen',
  templateUrl: './slider-imagen.component.html',
  styleUrls: ['./slider-imagen.component.css']
})
export class SliderImagenComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
autoplayTimeout:15000,
autoplayHoverPause:true,
autoplaySpeed:700,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true">', '</i><i class="fa fa-chevron-right" </i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
