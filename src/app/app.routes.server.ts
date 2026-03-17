import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
   {
    path: 'pokemons',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'pokemon/:id',
    renderMode: RenderMode.Server 
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'pricing',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender
  }
];
