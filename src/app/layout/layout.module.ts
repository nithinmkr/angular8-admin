import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FirstmenuComponent } from './firstmenu/firstmenu.component';
import { SecondmenuComponent } from './secondmenu/secondmenu.component';




@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidemenuComponent, FirstmenuComponent, SecondmenuComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
