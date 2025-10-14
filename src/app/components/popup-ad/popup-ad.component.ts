import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-ad',
  standalone: true,
  templateUrl: './popup-ad.component.html',
  imports: [CommonModule],
})
export class PopupAdComponent implements OnInit {
  showAd = false;
  isVisible = false;
  adImage = 'assets/Five_For_Five.png';
  adLink = 'https://chat.whatsapp.com/H0Dh9vfvzoeLwwRI8kmWi4';

  ngOnInit() {
    // Show after 3 seconds
    setTimeout(() => {
      this.showAd = true;

      // Wait a bit to trigger fade/scale animation
      setTimeout(() => {
        this.isVisible = true;
      }, 50);
    }, 3000);
  }

  closeAd() {
    // Start fade-out
    this.isVisible = false;
    // Remove element after animation
    setTimeout(() => (this.showAd = false), 400);
  }
}
