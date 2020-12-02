import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';

import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: IntroComponent },
  { path: 'services', component: ContentComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'gallary', component: GalleryComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
