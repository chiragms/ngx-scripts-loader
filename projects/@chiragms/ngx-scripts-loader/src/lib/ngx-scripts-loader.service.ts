import { Injectable } from '@angular/core';
import { NgxScriptsModel } from './models/ngx-scripts-model';
import { Observer, Observable, of, forkJoin } from 'rxjs';
import { map, mergeAll, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxScriptsLoaderService {
  private static scripts: { [id: string]: NgxScriptsModel } = {};

  constructor() { }

  load(script: string | NgxScriptsModel): Observable<NgxScriptsModel> {
    if (script instanceof NgxScriptsModel) {
      return this.build({ loaded: false, name: script.name, src: script.src }).pipe(shareReplay());
    } else if (typeof script == 'string') {
      return this.build({ loaded: false, name: script, src: script }).pipe(shareReplay());
    } else {
      throw new Error('Invalid script!');
    }
  }

  loadMultiple(scripts: Array<string | NgxScriptsModel>): Observable<NgxScriptsModel[]> {
    return forkJoin(scripts.map(script => {
      if (script instanceof NgxScriptsModel) {
        return this.build({ loaded: false, src: script.src, name: script.name }).pipe(shareReplay());
      } else if (typeof script == 'string') {
        return this.build({ loaded: false, src: script, name: script }).pipe(shareReplay());
      } else {
        throw new Error('Invalid scripts!');
      }
    }));
  }

  private build(script: NgxScriptsModel): Observable<NgxScriptsModel> {
    return new Observable<NgxScriptsModel>((observer: Observer<NgxScriptsModel>) => {
      let existingScript = NgxScriptsLoaderService.scripts[script.name];

      if (existingScript) {
        observer.next(existingScript);
        observer.complete();
      }
      else {
        if (!existingScript) {
          NgxScriptsLoaderService.scripts[script.name] = script;

          let element = this.buildElement(script.src);

          element.onload = () => {
            script.loaded = true;
            observer.next(script);
            observer.complete();
          };

          element.onerror = (error: any) => {
            observer.error("Couldn't load script " + script.src);
          };

          // document.getElementsByTagName('body')[0].appendChild(element);
          document.body.appendChild(element);
        }
      }
    });
  }

  private buildElement(src: string) {
    let extension = src.split(".");
    let element: HTMLScriptElement | HTMLLinkElement;

    if (extension[extension.length - 1] == "js") {
      element = this.buildJsElement(src);
    } else if (extension[extension.length - 1] == "css") {
      element = this.buildCssElement(src);
    } else {
      throw new Error("Only .js and .css files are supported.");
    }

    return element;
  }

  private buildJsElement(src: string): HTMLScriptElement {
    let scriptElement = document.createElement("script")
    scriptElement.type = "text/javascript";
    scriptElement.src = src;
    return scriptElement;
  }

  private buildCssElement(src: string): HTMLLinkElement {
    let linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = src;
    return linkElement;
  }
}
