import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { SendRecComponent } from './send-rec/send-rec.component';
import { LandingComponent } from './landing/landing.component';
import { GiveRecComponent } from './give-rec/give-rec/give-rec.component';
import { RecCardComponent } from './give-rec/rec-card/rec-card.component';
import { RecDetailComponent } from './give-rec/rec-detail/rec-detail.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SendRecComponent,
    LandingComponent,
    GiveRecComponent,
    RecCardComponent,
    RecDetailComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
