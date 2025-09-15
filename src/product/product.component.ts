import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartPopupComponent } from '../cart-popup/cart-popup.component';
import { CartService, CartItem } from '../services/cart.service';

interface Product {
  brand: string;
  title: string;
  price: string;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
}

interface Suggestion {
  img: string;
  brand: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product',
  imports: [CommonModule,RouterModule,FormsModule,CartPopupComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit, OnDestroy {
  cartItems: CartItem[] = [];
  cartVisible = false;

  constructor(public cartService: CartService) {
    // Subscribe to the service to get live updates
    this.cartService.cartItems$.subscribe(items => this.cartItems = items);
    this.cartService.cartVisible$.subscribe(visible => this.cartVisible = visible);
  }

  @ViewChild('suggestSlider', { static: false }) suggestSliderRef!: ElementRef<HTMLDivElement>;
  suggestIndex = 0;
  private suggestTimer: any;

  ngAfterViewInit() {
    this.startSuggestAuto();
  }
  ngOnDestroy() { clearInterval(this.suggestTimer); }

product = {
    brand: 'BW',
    title: 'Viscose Wool Woven Tank Top',
    price: 54600,
    description: `The Woven Tank Top is tailored in Italy...`,
    images: ['ED1SP25_M30019_900x.png'],
    colors: ['Bone'],
    sizes: ['L', 'M', 'S']
  };

addToCart() {
    const item: CartItem = {
      name: this.product.title,
      img: this.product.images[0],
      price: Number(this.product.price),
      qty: 1,
      color: this.product.colors[0],
      size: this.product.sizes[0]
    };
    this.cartService.addToCart(item); // ✅ This triggers popup to open
  }

  // Suggestion Products
  suggestions: Suggestion[] = [
    { img: 'category1.png', brand: 'Natura Edition', name: 'Classic Oversized', price: 500 },
    { img: 'category2.png', brand: 'Natura Edition', name: 'Classic Oversized', price: 500 },
    { img: 'category3.png', brand: 'Natura Edition', name: 'Classic Oversized', price: 500 },
    { img: 'category1.png', brand: 'Natura Edition', name: 'Classic Oversized', price: 500 }
  ];

  collapsibles = [
    { title: 'Details +', content: 'Made in Italy. Material: Viscose/Wool/Elastane. Dry Clean Only.', open: false },
    { title: 'Shipping Policy +', content: 'Ships within 5–7 business days. Free returns within 14 days.', open: false },
    { title: 'Share +', content: '[Social Icons Here]', open: false }
  ];

  // ===== Slider Controls for Suggestions =====
  startSuggestAuto() { this.suggestTimer = setInterval(() => this.scrollSuggest('next'), 3500); }
  pauseSuggest() { clearInterval(this.suggestTimer); }
  resumeSuggest() { this.startSuggestAuto(); }

  scrollSuggest(direction: 'prev' | 'next') {
    const slider = this.suggestSliderRef?.nativeElement;
    if (!slider) return;
    const delta = slider.clientWidth * 0.9 * (direction === 'next' ? 1 : -1);
    slider.scrollBy({ left: delta, behavior: 'smooth' });
    this.updateSuggestIndex();
  }

  goToSuggest(index: number) {
    const slider = this.suggestSliderRef?.nativeElement;
    if (!slider) return;
    const target = slider.children[index] as HTMLElement;
    if (!target) return;
    slider.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    this.suggestIndex = index;
  }

  private updateSuggestIndex() {
    const slider = this.suggestSliderRef?.nativeElement;
    if (!slider) return;
    const children = Array.from(slider.children) as HTMLElement[];
    const center = slider.scrollLeft + slider.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    children.forEach((el, i) => {
      const elCenter = el.offsetLeft + el.clientWidth / 2;
      const dist = Math.abs(center - elCenter);
      if (dist < min) { min = dist; closest = i; }
    });
    this.suggestIndex = closest;
  }
}
