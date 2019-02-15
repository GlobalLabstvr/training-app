import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomeComponent, SideNavComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CommonMaterialModule,
    BrowserAnimationsModule
    
   
  ]
})
export class HomeModule { }
