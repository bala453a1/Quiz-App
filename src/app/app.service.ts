import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz-model/quiz.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private questionsNAnswersURL = 'assets/mock/questionsNAnswers.json'
  private questionsNOptionsURL = 'assets/mock/questionsNOptions.json'

  constructor(private httpClient: HttpClient,private toastr: ToastrService) { }
  public getQuestionAndAnswer(){
    return this.httpClient.get<Quiz>(this.questionsNAnswersURL);
  }
  public questionsNOptions(){
    return this.httpClient.get<Quiz>(this.questionsNOptionsURL);
  }
  public getAppName(){
    return "Quiz App";
  }
  showSuccess(message:any){
    this.toastr.success(message)
  }
}