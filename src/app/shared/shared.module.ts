import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonMaterialModule } from './common-material/common-material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CommonMaterialModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
