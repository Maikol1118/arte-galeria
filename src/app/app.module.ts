import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//componentes de Angular
import { SliderImagenComponent } from './components/slider-imagen/slider-imagen.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { NavVarComponent } from './components/nav-var/nav-var.component';
//ANgularmaterial
import { MaterialModulesModule } from './components/material/material-modules/material-modules.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ArtistaComponent } from './components/artista/artista.component';
@NgModule({
  declarations: [
    AppComponent,
    SliderImagenComponent,
    HomeComponent,
    IndexComponent,
    NavVarComponent,
    FooterComponent,
    GaleriaComponent,
    ArtistaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    MaterialModulesModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
