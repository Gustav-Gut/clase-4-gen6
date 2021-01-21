import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

/*MATERIAL */
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { CardComponent } from './components/card/card.component';

import { ClickDirective } from './directives/handlerEvent/click.directive';
import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ClickDirective,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
