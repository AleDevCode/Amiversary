import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from './components/slide/slide.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ParticulasComponent } from './components/particulas/particulas.component';
import { GalleryComponent } from './components/gallery/gallery.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'love', component: SlideComponent},
  {path: 'particles', component: ParticulasComponent},
  {path: 'galeria', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
