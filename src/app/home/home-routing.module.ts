import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TopicComponent } from './topic/topic.component';
import { TopicResolver } from './topic/topic.resolver';

const routes: Routes = [ 
  { path:'', component: HomeComponent },
  { path:'topic/:id', component: TopicComponent, resolve: {topic: TopicResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
