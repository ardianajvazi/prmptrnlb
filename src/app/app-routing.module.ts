import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home-component';

// import our Components
import { UsingLibraryComponent } from './UsingLibrary/usingLibrary-component';

//
import { StyleComponent } from './style/style-component';

//
import { GuidelinesComponent } from './Guidelines/guidelines-component';

//
import { PatternsComponent } from './patterns/patterns-component';

//
import { UiElementsComponent } from './UiElements/uiElements-component';
import { ButtonsComponent } from './UiElements/buttons/buttons-component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Our Components
  { path: 'library', component: UsingLibraryComponent },

  //
  { path: 'style', component: StyleComponent },

  //
  { path: 'guidelines', component: GuidelinesComponent },

  //
  { path: 'patterns', component: PatternsComponent },

  //
  { path: 'ui-elements', component: UiElementsComponent },
  { path: 'buttons', component: ButtonsComponent }

];

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	  exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
