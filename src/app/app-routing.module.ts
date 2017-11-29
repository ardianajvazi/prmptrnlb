import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home-component';

// import our Components
import { StyleGuideComponent } from './styleGuide/styleGuide-component';
import { StylesComponent } from './styles/styles-component';
import { LayoutsComponent } from './layouts/layouts-component';
import { ComponentsComponent } from './components/components-component';
import { NavigationComponent } from './navigation/navigation-component';
import { PatternsComponent } from './patterns/patterns-component';
import { UsabilityComponent } from './usability/usability-component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Our Components
  { path: 'style-guide', component: StyleGuideComponent },
  { path: 'styles', component: StylesComponent },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'patterns', component: PatternsComponent },
  { path: 'usability', component: UsabilityComponent },
];

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	  exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
