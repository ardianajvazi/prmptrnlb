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
import { SidebarModule } from 'ng-sidebar';
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
  MatStepperModule
} from '@angular/material';
// End of Material Design Components
import { ChartsModule } from 'ng2-charts';
import 'hammerjs';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';

import { PrismComponent } from 'angular-prism';

import { MyAppComponent} from './app.component';
import { RoutingModule } from "./app-routing.module";

// The Components We create.
import { HomeComponent } from './home/home-component' // using this for my testing.

// Using Library
import { UsingLibraryComponent } from './UsingLibrary/usingLibrary-component';
import { BuildingPrototypesComponent } from './UsingLibrary/buildingPrototypes/buildingPrototypes-component';
import { ForWhoComponent } from './UsingLibrary/forWho/forWho-component';
import { HowToUpdateComponent } from './UsingLibrary/howToUpdate/howToUpdate-component';

// Styles
import { StyleComponent } from './Style/style-component';
import { ColorComponent } from './Style/color/color-component';
import { DashSeparatorComponent } from './Style/dashSeparator/dashSeparator-component';
import { GradientComponent } from './Style/gradient/gradient-component';
import { IconsComponent } from './Style/icons/icons-component';
import { LogoComponent } from './Style/logo/logo-component';
import { TypographyComponent } from './Style/typography/typography-component';
import { VoiceToneComponent } from './Style/voiceTone/voiceTone-component';
import { WritingComponent } from './Style/writing/writing-component';


// Guidelines
import { GuidelinesComponent } from './Guidelines/guidelines-component';
import { AccessibilityComponent } from './Guidelines/accessibility/accessibility-component';
import { FooterComponent } from './Guidelines/footer/footer-component';
import { GridSystemComponent } from './Guidelines/gridSystem/gridSystem-component';
import { PageHierarchyComponent } from './Guidelines/pageHierarchy/pageHierarchy-component';
import { PageLayoutsComponent } from './Guidelines/pageLayouts/pageLayouts-component';
import { PrimeNavigationComponent } from './Guidelines/primeNavigation/primeNavigation-component';

// Patterns
import { PatternsComponent } from './Patterns/patterns-component';
import { AlertsComponent } from './Patterns/alerts/alerts-component';
import { BreadcrumbsComponent } from './Patterns/breadcrumbs/breadcrumbs-component';
import { DataFormatComponent } from './Patterns/dataFormat/dataFormat-component';
import { EmptyStatesComponent } from './Patterns/emptyStates/emptyStates-component';
import { LoadingComponent } from './Patterns/loading/loading-component';
import { NotificationsComponent } from './Patterns/notifications/notifications-component';
import { PaginationComponent } from './Patterns/pagination/pagination-component';
import { ProgressActivityComponent } from './Patterns/progressActivity/progressActivity-component';
import { SearchComponent } from './Patterns/search/search-component';
import { SettingsComponent } from './Patterns/settings/settings-component';
import { TabsComponent } from './Patterns/tabs/tabs-component';
import { TooltipsComponent } from './Patterns/tooltips/tooltips-component';
import { ValidationComponent } from './Patterns/validation/validation-component';
import { WizardStepperComponent } from './Patterns/wizardStepper/wizardStepper-component';

// UI Elements
import { UiElementsComponent } from './UiElements/uiElements-component';
import { AutocompleteComponent } from './UiElements/autocomplete/autocomplete-component';
import { ButtonsComponent } from './UiElements/buttons/buttons-component';
import { CarouselComponent } from './UiElements/carousel/carousel-component';
import { CardsComponent } from './UiElements/cards/cards-component';
import { ChartsGraphsComponent } from './UiElements/chartsGraphs/chartsGraphs-component';
import { CheckboxesComponent } from './UiElements/checkboxes/checkboxes-component';
import { ChipsComponent } from './UiElements/chips/chips-component';
import { DatePickerComponent } from './UiElements/datePicker/datePicker-component';
import {
  DialogsComponent,
  DialogViewComponent,
  DialogViewComponent2,
  DialogViewComponent3,
  DialogViewComponent4,
  DialogViewComponent5,
 } from './UiElements/dialogs/dialogs-component';
import { ExpansionPanelsComponent } from './UiElements/expansionPanels/expansionPanels-component';
import { GridListsComponent } from './UiElements/gridLists/gridLists-component';
import { ListsComponent } from './UiElements/lists/lists-component';
import { RadiobuttonsComponent } from './UiElements/radioButtons/radiobuttons-component';
import { SelectdropdownComponent } from './UiElements/selectDropdown/selectdropdown-component';
import { SlidersComponent } from './UiElements/sliders/sliders-component';
import { SnackbarsComponent, PizzaPartyComponent } from './UiElements/snackbars/snackbars-component';
import { TablesComponent } from './UiElements/tables/tables-component';
import { TextFieldsComponent } from './UiElements/textFields/textFields-component';
import { ToggleComponent } from './UiElements/toggles/toggle-component';
import { ToolbarsComponent } from './UiElements/toolbars/toolbars-component';

// This is where we import the components we pull in from material design and more so we can use them in our app.
@NgModule({
	imports: [
		BrowserModule,
    SidebarModule.forRoot(),
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
    ChartsModule,
    ScrollToModule.forRoot()
    // Ng2DeviceDetectorModule.forRoot(),
    // Ng2BreadcrumbModule.forRoot(),
	],
  //This is where we declare our custom components so we can use them throughout the app.
	declarations: [
		MyAppComponent,
    PrismComponent,
    HomeComponent,
    UsingLibraryComponent,
      BuildingPrototypesComponent,
      ForWhoComponent,
      HowToUpdateComponent,
    StyleComponent,
      ColorComponent,
      DashSeparatorComponent,
      GradientComponent,
      IconsComponent,
      LogoComponent,
      TypographyComponent,
      VoiceToneComponent,
      WritingComponent,
    GuidelinesComponent,
      AccessibilityComponent,
      FooterComponent,
      GridSystemComponent,
      PageHierarchyComponent,
      PageLayoutsComponent,
      PrimeNavigationComponent,
    PatternsComponent,
      AlertsComponent,
      BreadcrumbsComponent,
      DataFormatComponent,
      EmptyStatesComponent,
      LoadingComponent,
      NotificationsComponent,
      PaginationComponent,
      ProgressActivityComponent,
      SearchComponent,
      SettingsComponent,
      TabsComponent,
      TooltipsComponent,
      ValidationComponent,
      WizardStepperComponent,
    UiElementsComponent,
      AutocompleteComponent,
      ButtonsComponent,
      CarouselComponent,
      CardsComponent,
      ChartsGraphsComponent,
      CheckboxesComponent,
      ChipsComponent,
      DatePickerComponent,
      DialogsComponent,
      DialogViewComponent,
      DialogViewComponent2,
      DialogViewComponent3,
      DialogViewComponent4,
      DialogViewComponent5,
      ExpansionPanelsComponent,
      GridListsComponent,
      ListsComponent,
      RadiobuttonsComponent,
      SelectdropdownComponent,
      SlidersComponent,
      SnackbarsComponent,
      PizzaPartyComponent,
      TablesComponent,
      TextFieldsComponent,
      ToggleComponent,
      ToolbarsComponent
	],
  entryComponents: [
    DialogViewComponent,
    DialogViewComponent2,
    DialogViewComponent3,
    DialogViewComponent4,
    DialogViewComponent5,
    PizzaPartyComponent
  ],
	bootstrap: [MyAppComponent],
	providers:[]
})
export class MyAppModule { }
