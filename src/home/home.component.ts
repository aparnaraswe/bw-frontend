import { Component } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  // standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMobileMenuOpen = false;

  // Hero Section
  hero = {
    image: '/bg-1.png',
    title: 'NEW SEASON — MINIMAL ESSENTIALS',
    subtitle: 'Clean silhouettes. Premium materials. Designed to live in.',
    buttonText: 'SHOP NOW'
  };

  // Featured Products
  featuredProducts = [
    { name: 'Oversized Hoodie', price: '$195', image: '/cart1.jpg' },
    { name: 'Minimal Sneaker', price: '$395', image: '/cart2.jpg' },
    { name: 'Tailored Trouser', price: '$295', image: '/category2.png' },
    { name: 'Everyday Tee', price: '$125', image: '/category1.png' }
  ];

  // Categories (static)
  categories = [
    { title: 'NEW IN', image: '/category1.png' },
    { title: 'MEN', image: '/category2.png' },
    { title: 'WOMEN', image: '/category3.png' },
    { title: 'ACCESSORIES', image: '/cart2.jpg' }
  ];

  // Brand USPs (static)
  usps = [
    { title: 'Free Shipping', subtitle: 'On orders over $150' },
    { title: 'Easy Returns', subtitle: '30-day return window' },
    { title: 'Secure Checkout', subtitle: 'Protected payments' },
    { title: 'Premium Quality', subtitle: 'Crafted to last' }
  ];

  // Lookbook (static)
  lookbook = [
    { image: '/cart1.jpg', caption: 'Street Essentials' },
    { image: '/colllection-img.png', caption: 'Minimal Layers' },
    { image: '/ED1SP25_M30019_900x.png', caption: 'Monochrome Fit' }
  ];

  // Testimonials (static)
  testimonials = [
    { quote: 'The fit and finish are unmatched. My go-to brand now.', author: 'Aarav • Mumbai' },
    { quote: 'Effortless style. Every piece feels premium.', author: 'Sara • Delhi' },
    { quote: 'Love the minimal aesthetic and quality fabrics.', author: 'Kabir • Bengaluru' }
  ];

  // Quick View modal state
  quickViewOpen = false;
  selectedProduct: any = null;

  openQuickView(product: any) {
    this.selectedProduct = {
      ...product,
      colors: ['Black', 'Stone', 'Olive'],
      sizes: ['S', 'M', 'L', 'XL']
    };
    this.quickViewOpen = true;
  }

  closeQuickView() {
    this.quickViewOpen = false;
    this.selectedProduct = null;
  }

  constructor(public cartService: CartService) {}

  addQuickViewToBag() {
    if (!this.selectedProduct) { return; }
    const item: CartItem = {
      name: this.selectedProduct.name,
      img: this.selectedProduct.image,
      price: this.selectedProduct.price,
      qty: 1,
      color: this.selectedProduct.colors?.[0] || 'Default',
      size: this.selectedProduct.sizes?.[0] || 'M'
    };
    this.cartService.addToCart(item);
    this.closeQuickView();
  }

  // Collections
  collections = [
    {
      title: "MEN'S",
      image: '/category1.png',
      size: 'large',
      buttonText: 'EXPLORE'
    },
    {
      title: "WOMEN'S",
      image: '/category2.png',
      size: 'small',
      buttonText: 'EXPLORE'
    },
    {
      title: "ACCESSORIES",
      image: '/category3.png',
      size: 'small',
      buttonText: 'EXPLORE'
    }
  ];

  // Newsletter
  newsletter = {
    title: 'STAY UPDATED',
    subtitle: 'Subscribe to receive updates on new arrivals and exclusive offers',
    placeholder: 'Enter your email',
    buttonText: 'SUBSCRIBE'
  };

  // Announcement bar (static)
  announcement = {
    text: 'FREE SHIPPING OVER $150 • NEW COLLECTION NOW LIVE',
    linkText: 'SHOP NOW',
    link: '/collection'
  };

  // Trending (static)
  trending = [
    { label: 'CO-ORD SETS' },
    { label: 'OVERSIZED TEES' },
    { label: 'MONOCHROME' },
    { label: 'ATHLEISURE' },
    { label: 'KNITWEAR' }
  ];

  // Brand story (static)
  brandStory = {
    title: 'CRAFTED FOR THE MODERN MINIMALIST',
    copy: 'BW blends contemporary silhouettes with premium materials. Designed for everyday utility with elevated details.',
    image: '/frame_3.png'
  };
}
