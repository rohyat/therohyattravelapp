// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { HelpDetailComponent } from './help-detail/help-detail.component';
import { ExplorePremiumPackageComponent } from './explore-premium-package/explore-premium-package.component';
import { ExploreDeluxePackageComponent } from './explore-deluxe-package/explore-deluxe-package.component';
import { ExploreDiamondPackageComponent } from './explore-diamond-package/explore-diamond-package.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'package/:id', component: PackageDetailComponent },
  { path: 'hotel/:id', component: HotelDetailComponent },
  { path: 'place/:id', component: PlaceDetailComponent },
  { path: 'help/:id', component: HelpDetailComponent },
  { path: 'Premium', component: ExplorePremiumPackageComponent },
  { path: 'Deluxe', component:  ExplorePremiumPackageComponent },
  { path: 'Diamond', component: ExplorePremiumPackageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
