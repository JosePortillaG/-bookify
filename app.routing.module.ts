import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GiveRecComponent } from './give-rec/give-rec/give-rec.component';
import { RecDetailComponent } from './give-rec/rec-detail/rec-detail.component';
import { LandingComponent } from './landing/landing.component';
import { SendRecComponent } from './send-rec/send-rec.component';



const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'send',
    component: SendRecComponent
  },
  {
    path: 'give',
    component: GiveRecComponent
  },
  {
    path: 'give/:id',
    component:  RecDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
