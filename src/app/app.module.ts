import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './Components/app-header/app-header.component';
import { AppFooterComponent } from './Components/app-footer/app-footer.component';
import { AppBodyComponent } from './Components/app-body/app-body.component';
import { AboutUsComponent } from './Mainpages/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Mainpages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppBodyComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
