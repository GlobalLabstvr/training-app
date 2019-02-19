import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopicComponent } from './topic/topic.component'


@NgModule({
  declarations: [HomeComponent, TopicComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CommonMaterialModule,
    BrowserAnimationsModule,

  ]
})
export class HomeModule { }
