import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-tecs',
  templateUrl: './tecs.component.html',
  styleUrls: ['./tecs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TecsComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
