import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [ { path:'', component: HomeComponent },
{ path:'topic', component: TopicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
