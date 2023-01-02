import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, ]);

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
