import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';
import { TopicResolver } from './topic.resolver';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { SharedModule } from '../shared/shared.module';
import { ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
  declarations: [ TopicComponent ],
  imports: [
    CommonModule,
    SharedModule,
    TopicRoutingModule,
    CommonMaterialModule
  ],
  providers: [TopicResolver]
})
export class TopicModule { }
