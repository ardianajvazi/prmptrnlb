import {Component, Optional, ViewEncapsulation} from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  	selector: 'my-app',
    // templateUrl: 'nav/nav-component.html',
  	template:
    `
    <div>
      <header id="header">
        <mat-toolbar class="top-toolbar" id="#grad1">
          <button
          collapse
          type="button"
          mat-icon-button
          (click)="_toggleSidebar()"
          title="Open sidenav">
            <mat-icon>menu</mat-icon>
          </button>
          <img src="../../assets/img/Logo_Inverse.svg" alt="Premera logo">
        </mat-toolbar>
      </header>
      <ng-sidebar-container class="test">
        <!-- A sidebar -->
        <ng-sidebar [(opened)]="_opened" mode="push" autoCollapseWidth=900 class="drawer-width">
          <mat-nav-list class="sidenav-padding">

          <!-- Using Library -->
          <div>
          <mat-list-item class="sidenav-font-family-weight" [routerLink]="['/library']" data-toggle="collapse" data-parent=".sidenav-padding" data-target="#libraryCollapse">
          Using The Library
          </mat-list-item>
          <div id="libraryCollapse" class="collapse">
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/for-who']">
          Who This Is For
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/how-to-update']">
          How To Make Updates
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/building-prototypes']">
          Building Prototypes
          </mat-list-item>
          </div>
          </div>
          <!-- End of Using Library -->

          <!-- Style -->
          <div>
          <mat-list-item class="sidenav-font-family-weight" [routerLink]="['/style']" data-toggle="collapse" data-parent=".sidenav-padding" data-target="#styleCollapse">
          Style
          </mat-list-item>
          <div id="styleCollapse" class="collapse">
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/color']">
          Color
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/gradient']">
          Gradient
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/dash-separator']">
          Dash Separator
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/icons']">
          Icons
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/logo']">
          Logo
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/typography']">
          Typography
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/voice-tone']">
          Voice &amp; Tone
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/writing']">
          Writing
          </mat-list-item>
          </div>
          </div>
          <!-- End Style -->

          <!-- Guidelines -->
          <div>
          <mat-list-item class="sidenav-font-family-weight" [routerLink]="['/guidelines']" data-toggle="collapse" data-parent=".sidenav-padding" data-target="#guidelinesCollapse">
          Guidelines
          </mat-list-item>
          <div id="guidelinesCollapse" class="collapse">
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/accessibility']">
          Accessibility
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/grid-system']">
          Grid System
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/page-hierarchy']">
          Page Hierarchy
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/page-layouts']">
          Page Layouts
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/prime-navigation']">
          Prime Navigation
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/footer']">
          Footer
          </mat-list-item>
          </div>
          </div>
          <!-- End of Guidelines -->

          <!-- Patterns -->
          <div>
          <mat-list-item class="sidenav-font-family-weight" [routerLink]="['/patterns']" data-toggle="collapse" data-parent=".sidenav-padding" data-target="#patternsCollapse">
          Patterns
          </mat-list-item>
          <div id="patternsCollapse" class="collapse">
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/alerts']">
          Alerts
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/progress-activity']">
          Progress & Activity
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/breadcrumbs']">
          Breadcrumbs
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/data-format']">
          Data Format
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/empty-states']">
          Empty States
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/loading']">
          Loading
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/notifications']">
          Notifications
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/pagination']">
          Pagination
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/search']">
          Search
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/settings']">
          Settings
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/tabs']">
          Tabs
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/tooltips']">
          Tooltips
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/validation']">
          Validation
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/wizard-stepper']">
          Wizard stepper
          </mat-list-item>
          </div>
          </div>
          <!-- End Patterns -->

          <!-- UI Elements -->
          <div>
          <mat-list-item class="sidenav-font-family-weight" [routerLink]="['/ui-elements']" data-toggle="collapse" data-parent=".sidenav-padding" data-target="#uiElementsCollapse">
          UI Elements
          </mat-list-item>
          <div id="uiElementsCollapse" class="collapse">
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/autocomplete']">
          Autocomplete
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/buttons']">
          Buttons
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/cards']">
          Cards
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/carousel']">
          Carousel
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/charts-graphs']">
          Charts & Graphs
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/checkboxes']">
          Checkboxes
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/chips']">
          Chips
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/tables']">
          Data tables
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/date-picker']">
          Date picker
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/dialogs']">
          Dialogs
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/expansion-panels']">
          Expansion panels
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/grid-lists']">
          Grid lists
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/lists']">
          Lists
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/radio-buttons']">
          Radio Buttons
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/select-dropdown']">
          Select Dropdown
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/sliders']">
          Sliders
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/snackbars']">
          Snackbars
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/text-fields']">
          Text fields
          </mat-list-item>
          <mat-list-item class="navLinksHover sidenav-font-family-weight" [routerLink]="['/toggles']">
          Toggles
          </mat-list-item>
          </div>
          </div>
          <!-- End UI Elements -->


          </mat-nav-list>
        </ng-sidebar>
        <!-- End of sidebar -->
        <!-- Page content -->
        <div ng-sidebar-content class="drawer-content">
          <router-outlet></router-outlet>
        </div>
      </ng-sidebar-container>
    </div>
    `
    ,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss']
})
export class MyAppComponent {
  private _opened: boolean = true;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
