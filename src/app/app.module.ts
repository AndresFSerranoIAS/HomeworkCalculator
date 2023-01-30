import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumComponent } from './components/sum/sum.component';
import { DivComponent } from './components/div/div.component';
import { SubComponent } from './components/sub/sub.component';
import { MulComponent } from './components/mul/mul.component';

@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    DivComponent,
    SubComponent,
    MulComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
