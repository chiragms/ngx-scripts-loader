import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxScriptsModel } from './models/ngx-scripts-model';
import { NgxScriptsLoaderService } from './ngx-scripts-loader.service';

@Component({
  selector: 'ngx-scripts-loader',
  template: ``,
  styles: [
  ]
})
export class NgxScriptsLoaderComponent implements OnInit {
  @Input()
  Script: string | NgxScriptsModel | Array<string | NgxScriptsModel>;

  @Output()
  Loaded = new EventEmitter();

  @Output()
  Failed = new EventEmitter();

  constructor(private loaderService: NgxScriptsLoaderService) {
    if (this.Script instanceof Array) {
      loaderService.loadMultiple(this.Script).subscribe(result => {
        this.Loaded.emit();
      }, error => {
        this.Failed.emit(error);
      });
    } else {
      loaderService.load(this.Script).subscribe(result => {
        this.Loaded.emit();
      }, error => {
        this.Failed.emit(error);
      });
    }
  }

  ngOnInit(): void {
  }

}
