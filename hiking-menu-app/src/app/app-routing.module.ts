import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesonalPageComponent } from './components/pesonal-page/pesonal-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'about-me', component: PesonalPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
