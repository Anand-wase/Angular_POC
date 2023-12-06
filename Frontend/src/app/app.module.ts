import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { VillaCardComponent } from './Villa/Villa-card/Villa-card.component';
import { VillaListComponent } from './Villa/villa-list/villa-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './Services/housing.service';
import { VillaDetailComponent } from './Villa/Villa-detail/Villa-detail.component';

const appRoutes: Routes = [
  {path: '', component: VillaListComponent},
  {path: 'Villa-detail/:id', component: VillaDetailComponent},

  
];

@NgModule({
  declarations: [	
    AppComponent,
    VillaCardComponent,
    VillaListComponent,
    NavBarComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
