import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CommonMaterialModule } from './common-material/common-material.module';


@NgModule({
  declarations: [ HeaderComponent, FooterComponent, SideNavComponent ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, SideNavComponent]
})
export class SharedModule { }
