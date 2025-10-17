import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PopupAdComponent } from './components/popup-ad/popup-ad.component';
import { register } from 'swiper/element/bundle';
import { MatIconModule } from '@angular/material/icon';
register();

 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, PopupAdComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ffuf-starter';
  
  @ViewChild('swiperEl') swiperEl!: ElementRef;
  currentYear: number = new Date().getFullYear();

  ngAfterViewInit() {
    const swiper = this.swiperEl.nativeElement;
    Object.assign(swiper, {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: { clickable: true },
      navigation: true,
      effect: 'fade',
      loop: true,
      autoplay: { delay: 4000 },
    });
    swiper.initialize();
  }
  
}
