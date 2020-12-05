import { Component } from '@angular/core';
import { NgxScriptsLoaderService } from 'projects/@chiragms/ngx-scripts-loader/src/lib/ngx-scripts-loader.service';

declare var $: any;

@Component({
  selector: 'ngx-cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxScriptsLoaderDemo';
  jQueryLoaded = false;
  bsLoaded = false;

  angularModuleCode = `import { NgxScriptsLoaderModule } from 'ngx-scripts-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScriptsLoaderModule, <--- import module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  `;

  loadCode = `
declare var $: any;
...
@Component()
...
constructor(
  private scriptLoader: NgxScriptsLoaderService <--- inject the service
) { }

loadJquery() {
  // load jQuery and then execute some code
  this.scriptLoader.load('https://code.jquery.com/jquery-3.5.1.min.js').subscribe(result => {
    // hide all p tags using jQuery
    $('p').hide();
  })
}
  `

  constructor(private scriptLoader: NgxScriptsLoaderService) { }

  loadJquery() {
    this.scriptLoader.load('https://code.jquery.com/jquery-3.5.1.min.js').subscribe(result => {
      this.jQueryLoaded = true;
    })
  }
}
