import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home-component';

// importing our Components
// Library
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
import { DialogsComponent } from './UiElements/dialogs/dialogs-component';
import { ExpansionPanelsComponent } from './UiElements/expansionPanels/expansionPanels-component';
import { GridListsComponent } from './UiElements/gridLists/gridLists-component';
import { ListsComponent } from './UiElements/lists/lists-component';
import { RadiobuttonsComponent } from './UiElements/radioButtons/radiobuttons-component';
import { SelectdropdownComponent } from './UiElements/selectDropdown/selectdropdown-component';
import { SlidersComponent } from './UiElements/sliders/sliders-component';
import { SnackbarsComponent } from './UiElements/snackbars/snackbars-component';
import { TablesComponent } from './UiElements/tables/tables-component';
import { TextFieldsComponent } from './UiElements/textFields/textFields-component';
import { ToggleComponent } from './UiElements/toggles/toggle-component';
import { ToolbarsComponent } from './UiElements/toolbars/toolbars-component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'random', component: HomeComponent },
  // Our Components
  { path: 'library', component: UsingLibraryComponent },
  { path: 'building-prototypes', component: BuildingPrototypesComponent },
  { path: 'for-who', component: ForWhoComponent },
  { path: 'how-to-update', component: HowToUpdateComponent },

  // styles routes
  { path: 'style', component: StyleComponent },
  { path: 'color', component: ColorComponent },
  { path: 'dash-separator', component: DashSeparatorComponent },
  { path: 'gradient', component: GradientComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'logo', component: LogoComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'voice-tone', component: VoiceToneComponent },
  { path: 'writing', component: WritingComponent },

  // guidelines routes
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'grid-system', component: GridSystemComponent },
  { path: 'page-hierarchy', component: PageHierarchyComponent },
  { path: 'page-layouts', component: PageLayoutsComponent },
  { path: 'prime-navigation', component: PrimeNavigationComponent },

  // patterns routes
  { path: 'patterns', component: PatternsComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'data-format', component: DataFormatComponent },
  { path: 'empty-states', component: EmptyStatesComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress-activity', component: ProgressActivityComponent },
  { path: 'search', component: SearchComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'wizard-stepper', component: WizardStepperComponent },


  // UI Elements Routes
  { path: 'ui-elements', component: UiElementsComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'charts-graphs', component: ChartsGraphsComponent },
  { path: 'checkboxes', component: CheckboxesComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'date-picker', component: DatePickerComponent },
  { path: 'dialogs', component: DialogsComponent },
  { path: 'expansion-panels', component: ExpansionPanelsComponent },
  { path: 'grid-lists', component: GridListsComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'radio-buttons', component: RadiobuttonsComponent },
  { path: 'select-dropdown', component: SelectdropdownComponent },
  { path: 'sliders', component: SlidersComponent },
  { path: 'snackbars', component: SnackbarsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'text-fields', component: TextFieldsComponent },
  { path: 'toggles', component: ToggleComponent },
  { path: 'toolbars', component: ToolbarsComponent }

];

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	  exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
