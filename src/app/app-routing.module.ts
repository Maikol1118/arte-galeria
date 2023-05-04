import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'

  },
  {
    path:'home',
    component:HomeComponent,
   children:[
    {
      path: '',
      pathMatch:'prefix',
      redirectTo:'index'

    },
    {
      path: 'index',
      component:IndexComponent,
    },
    {
      path:'galeria',
      component:GaleriaComponent,
    },
    {
      path:'artista',
      component:ArtistaComponent,
    }

   ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
