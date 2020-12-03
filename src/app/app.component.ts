import { Component } from '@angular/core';
import { NgxScriptsLoaderService } from 'projects/ngx-scripts-loader/src/lib/ngx-scripts-loader.service';

@Component({
  selector: 'ngx-cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxScriptsLoaderDemo';

  constructor(private scriptLoader: NgxScriptsLoaderService) { }

  loadJquery() {
    this.scriptLoader.load('https://code.jquery.com/jquery-3.5.1.min.js').subscribe(result => alert('Loaded'))
  }
}
