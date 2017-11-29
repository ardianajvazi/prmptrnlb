import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ScrollToModule } from 'ng2-scroll-to';
// Importing Material Design Components.
import { MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule, } from '@angular/material';
// End of Material Design Components
import 'hammerjs';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';

import { PrismComponent } from 'angular-prism';

import { MyAppComponent} from './app.component';
import { RoutingModule } from "./app-routing.module";

// The Components We create.
import { HomeComponent } from './home/home-component'
import { NavComponent } from './nav/nav-component'
import { StyleGuideComponent } from './styleGuide/styleGuide-component';
import { StylesComponent } from './styles/styles-component';
import { LayoutsComponent } from './layouts/layouts-component';
import { ComponentsComponent } from './components/components-component';
import { NavigationComponent } from './navigation/navigation-component';
import { PatternsComponent } from './patterns/patterns-component';
import { UsabilityComponent } from './usability/usability-component';


// This is where we import the components we pull in from material design and more so we can use them in our app.
@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		RoutingModule,
		FlexLayoutModule,
    PerfectScrollbarModule,
    HttpModule,
		MatAutocompleteModule,
	  MatButtonModule,
	  MatButtonToggleModule,
	  MatCardModule,
	  MatCheckboxModule,
	  MatChipsModule,
	  MatDatepickerModule,
	  MatDialogModule,
	  MatExpansionModule,
	  MatGridListModule,
	  MatIconModule,
	  MatInputModule,
	  MatListModule,
	  MatMenuModule,
	  MatNativeDateModule,
	  MatPaginatorModule,
	  MatProgressBarModule,
	  MatProgressSpinnerModule,
	  MatRadioModule,
	  MatRippleModule,
	  MatSelectModule,
	  MatSidenavModule,
	  MatSliderModule,
	  MatSlideToggleModule,
	  MatSnackBarModule,
	  MatSortModule,
	  MatTableModule,
	  MatTabsModule,
	  MatToolbarModule,
	  MatTooltipModule,
		MatStepperModule,
    ScrollToModule.forRoot()
    // Ng2DeviceDetectorModule.forRoot(),
    // Ng2BreadcrumbModule.forRoot(),
	],
  //This is where we declare our custom components so we can use them throughout the app.
	declarations: [
		MyAppComponent,
    PrismComponent,
    HomeComponent,
    NavComponent,
    StyleGuideComponent,
    StylesComponent,
    LayoutsComponent,
    ComponentsComponent,
    NavigationComponent,
    PatternsComponent,
    UsabilityComponent
	],
	bootstrap: [MyAppComponent],
	providers:[
		// MenuItems,
		// BreadcrumbService,
		// PageTitleService
	]
})
export class MyAppModule { }
