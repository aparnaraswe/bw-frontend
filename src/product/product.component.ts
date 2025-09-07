import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  price: string;
}

@Component({
  selector: 'app-product',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // Main Product
  product: Product = {
    brand: 'BW',
    title: 'Viscose Wool Woven Tank Top',
    price: 'Rs. 54,600',
    description: `The Woven Tank Top is tailored in Italy from viscose-virgin wool blend with elastane for stretch comfort. 
                  The elevated tank style has a U-neckline, dropped armholes, and a relaxed fit in the body.`,
    images: [
      'ED1SP25_M30019_900x.png',
      'colllection-img.png',
      'colllection-img.png',
      'colllection-img.png',
      'colllection-img.png'
    ],
    colors: ['Bone'],
    sizes: ['L', 'M', 'S']
  };

  // Suggestion Products
  suggestions: Suggestion[] = [
    { img: 'category1.png', brand: 'Natura Edition', name: 'Classic Oversized', price: 'Rs. 500' },
    { img: 'category2.png', brand: 'Natura Edition', name: 'Classic Oversized', price: 'Rs. 500' },
    { img: 'category3.png', brand: 'Natura Edition', name: 'Classic Oversized', price: 'Rs. 500' },
    { img: 'category1.png', brand: 'Natura Edition', name: 'Classic Oversized', price: 'Rs. 500' }
  ];

collapsibles = [
  { title: 'Details +', content: 'Made in Italy. Material: Viscose/Wool/Elastane. Dry Clean Only.', open: false },
  { title: 'Shipping Policy +', content: 'Ships within 5–7 business days. Free returns within 14 days.', open: false },
  { title: 'Share +', content: '[Social Icons Here]', open: false }
];

}
