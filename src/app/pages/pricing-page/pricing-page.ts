import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css',
})
export class PricingPage implements OnInit {

  private tittle = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.tittle.setTitle('Pricing');
    this.meta.updateTag({ name: 'description', content: 'Discover our competitive pricing plans and find the perfect fit for your needs.' });
  }

}
