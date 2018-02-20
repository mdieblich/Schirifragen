// Angular Kern-Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

// Weitere Drittanbieter-Bibliotheken
// aktuell nix mehr

// Eigene Module, Komponenten, Pipes, Services....
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { PointsPipe } from './points.pipe';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { QuestionSuggestionService } from './question-suggestion.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    PointsPipe,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatChipsModule,

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
