import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMobileMenuOpen = false;

  // Hero Section
  hero = {
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&fit=crop',
    title: 'EIGHTH COLLECTION',
    subtitle: 'Discover the latest from BW',
    buttonText: 'SHOP NOW'
  };

  // Featured Products
  featuredProducts = [
    { name: 'ESSENTIALS HOODIE', price: '$195', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop' },
    { name: 'MILITARY SNEAKER', price: '$395', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop' },
    { name: 'RELAXED TROUSER', price: '$295', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop' },
    { name: 'OVERSIZED TEE', price: '$125', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop' }
  ];

  // Collections
  collections = [
    {
      title: "MEN'S",
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      size: 'large',
      buttonText: 'EXPLORE'
    },
    {
      title: "WOMEN'S",
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      size: 'small',
      buttonText: 'EXPLORE'
    },
    {
      title: "ACCESSORIES",
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
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
}
