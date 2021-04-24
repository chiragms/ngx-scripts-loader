# ngx-scripts-loader

[![Build Status](https://dev.azure.com/chiragms/ngxScriptsLoader/_apis/build/status/ngxScriptsLoader-CI?branchName=main)](https://dev.azure.com/chiragms/ngxScriptsLoader/_build/latest?definitionId=1&branchName=main)

Load scripts and css programmatically and only when you need them.  

[Documentation Here](https://chiragms.github.io/ngx-scripts-loader/)

## Installation
`npm install @chiragms/ngx-scripts-loader`

## Import Module
```
import { NgxScriptsLoaderModule } from 'ngx-scripts-loader';

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
```

## Usage
```
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
```
