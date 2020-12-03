import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxScriptsLoaderModule } from 'projects/ngx-scripts-loader/src/lib/ngx-scripts-loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScriptsLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
