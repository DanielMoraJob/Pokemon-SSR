import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage implements OnInit {
  private tittle = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.tittle.setTitle('About');
    this.meta.updateTag({ name: 'description', content: 'Learn more about our company and mission.' });
    this.meta.updateTag({ name: 'keywords', content: 'about us, company, mission, values' });
  }

}
