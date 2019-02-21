import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: 'home' , loadChildren: './home/home.module#HomeModule'},
  { path:'topic/:id', loadChildren: './topic/topic.module#TopicModule' },
  { path: '' , redirectTo: '/home', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
