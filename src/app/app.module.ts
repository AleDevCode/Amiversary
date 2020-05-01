import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './components/slide/slide.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ParticulasComponent } from './components/particulas/particulas.component';
import { GalleryComponent } from './components/gallery/gallery.component';

// Particulas
import { ParticlesModule } from 'angular-particle';
import { DeferLoadModule } from '@trademe/ng-defer-load';



@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    InicioComponent,
    ParticulasComponent,
    GalleryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    DeferLoadModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
