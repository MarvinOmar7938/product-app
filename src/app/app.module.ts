import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { LogrosService } from './service/logros.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [LogrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
