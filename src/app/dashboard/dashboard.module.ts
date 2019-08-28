import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';



@NgModule({
  declarations: [MainComponent, HeaderComponent, BodyComponent, MenuListComponent, MenuItemComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class DashboardModule { }
