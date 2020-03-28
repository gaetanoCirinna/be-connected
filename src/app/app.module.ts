import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BreadcrumbNavComponent } from './widget/breadcrumb-nav/breadcrumb-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilePageComponent,
    BreadcrumbNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
