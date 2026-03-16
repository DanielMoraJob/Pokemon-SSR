import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage implements OnInit {
  private tittle = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.tittle.setTitle('Contact');
    this.meta.updateTag({ name: 'description', content: 'Get in touch with us.' });
  }
}
