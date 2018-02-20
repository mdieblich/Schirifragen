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

// Weitere Drittanbieter-Bibliotheken
// aktuell nix mehr

// Eigene Module, Komponenten, Pipes, Services....
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { PointsPipe } from './points.pipe';
import { QuestionService } from './question.service';
import { QuestionSuggestionService } from './question-suggestion.service';
import { UserService } from './user.service';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    PointsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [
    QuestionService,
    QuestionSuggestionService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
