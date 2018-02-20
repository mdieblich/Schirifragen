import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/question', pathMatch: 'full' },
  { path: 'question/next', redirectTo: '/question', pathMatch: 'full' },
  // { path: 'dashboard', component: TODO: Dashboard},
  { path: 'question', component: QuestionComponent},
  { path: 'question/:id', component: QuestionComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
