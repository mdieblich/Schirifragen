// Angular Kern-Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Weitere Drittanbieter-Bibliotheken
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// aktuell nix mehr

// Eigene Module, Komponenten, Pipes, Services....
import { AppRoutingModule } from './/app-routing.module';

import { PointsPipe } from './points.pipe';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AnalysisComponent } from './analysis/analysis.component';

import { QuestionService } from './question.service';
import { QuestionSuggestionService } from './question-suggestion.service';
import { UserService } from './user.service';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { ScoreProgressBarComponent } from './score-progress-bar/score-progress-bar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RuleReferenceListComponent } from './rule-reference-list/rule-reference-list.component';


@NgModule({
  declarations: [
    PointsPipe,

    AppComponent,
    QuestionComponent,
    AnalysisComponent,
    AnswerListComponent,
    ScoreProgressBarComponent,
    CheckboxComponent,
    RuleReferenceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    NgbModule.forRoot(),  // Bootstrap

    AppRoutingModule
  ],
  providers: [
    QuestionService,
    QuestionSuggestionService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
