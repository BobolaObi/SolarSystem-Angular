import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {DetailedViewComponent} from "./detailed-view/detailed-view.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
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
    path: "list/:id",
    component : DetailedViewComponent
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
