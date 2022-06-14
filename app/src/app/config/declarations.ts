import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-rightNavBar3Component
import { rightNavBar3Component } from '../components/rightNavBar3.component';
//CORE_REFERENCE_IMPORT-leftNavBar_2Component
import { leftNavBar_2Component } from '../components/leftNavBar_2.component';
//CORE_REFERENCE_IMPORT-leftNavBarComponent
import { leftNavBarComponent } from '../components/leftNavBar.component';
//CORE_REFERENCE_IMPORT-rightNavBar_2Component
import { rightNavBar_2Component } from '../components/rightNavBar_2.component';
//CORE_REFERENCE_IMPORT-rightNavBarComponent
import { rightNavBarComponent } from '../components/rightNavBar.component';
//CORE_REFERENCE_IMPORT-mainFeed_2Component
import { mainFeed_2Component } from '../components/mainFeed_2.component';
//CORE_REFERENCE_IMPORT-mainFeedComponent
import { mainFeedComponent } from '../components/mainFeed.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';
//CORE_REFERENCE_IMPORT-navBarComponent
import { navBarComponent } from '../components/navBar.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-rightNavBar3Component
  rightNavBar3Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-leftNavBar_2Component
  leftNavBar_2Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-leftNavBarComponent
  leftNavBarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-rightNavBar_2Component
  rightNavBar_2Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-rightNavBarComponent
  rightNavBarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-mainFeed_2Component
  mainFeed_2Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-mainFeedComponent
  mainFeedComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navBarComponent
  navBarComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: homeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
