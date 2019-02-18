import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CoursesService } from './side-nav/courses.service';

const routes: Routes = [ { path:'', component: HomeComponent, resolve: {'': CoursesService } } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
