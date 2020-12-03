import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScriptsLoaderComponent } from './ngx-scripts-loader.component';

describe('NgxScriptsLoaderComponent', () => {
  let component: NgxScriptsLoaderComponent;
  let fixture: ComponentFixture<NgxScriptsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxScriptsLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScriptsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
