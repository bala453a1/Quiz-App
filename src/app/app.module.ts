import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizLoginComponent } from './quiz-login/quiz-login.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { QuizScoreComponent } from './quiz-score/quiz-score.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';
import { QuizContainerComponent } from './quiz-container/quiz-container.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import {BlockCopyPasteDirective} from '../app/block-copy-paste.directive';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    QuizLoginComponent,
    QuizStartComponent,
    QuizDisplayComponent,
    QuizScoreComponent,
    QuizResultComponent,
    QuizHeaderComponent,
    QuizContainerComponent,
    QuizQuestionComponent,
    BlockCopyPasteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule,
    MatCardModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
