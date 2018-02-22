// Angular Kern-Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

// Weitere Drittanbieter-Bibliotheken
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
import { AnswerComponent } from './answer/answer.component';
import { AnswerListComponent } from './answer-list/answer-list.component';


@NgModule({
  declarations: [
    PointsPipe,

    AppComponent,
    QuestionComponent,
    AnalysisComponent,
    AnswerComponent,
    AnswerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,

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
