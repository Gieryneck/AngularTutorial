// An Angular best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule
// ng generate module app-routing --flat --module=app
// --flat puts the file in src/app instead of its own folder.
// --module=app tells the CLI to register it in the imports array of the AppModule.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full" }, // This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'
  {path:"dashboard", component: DashboardComponent},
  {path: "heroes", component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent } // :id is a placeholder for a specific hero id
]

@NgModule({

  imports: [ RouterModule.forRoot(routes) ], // must initialize the router and start it listening for browser location changes
                                            // The method is called forRoot() because you configure the router at the application's root level

  exports: [
    RouterModule  // Exporting RouterModule makes router directives available for use in the AppModule components that will need them
  ]
  
})

export class AppRoutingModule { }
