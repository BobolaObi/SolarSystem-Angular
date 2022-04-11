import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {DetailedViewComponent} from "./detailed-view/detailed-view.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ContentCardComponent} from "./content-card/content-card.component";

const routes: Routes = [
  {
    path: "list/:id",
    component : DetailedViewComponent
  },

  {
    path: "",
    redirectTo: '/list',
    pathMatch: "full"

  },
  {
    path: "list",
    component: ContentListComponent
  },

  {
    path: "card", component: ContentCardComponent
  },
  {
    path: "**", component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
