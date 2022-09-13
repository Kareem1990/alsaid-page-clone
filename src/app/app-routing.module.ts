import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:"events", component:EventsComponent },
  {path:"", component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EventsComponent, HomepageComponent]
