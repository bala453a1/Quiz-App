import { Component, OnInit } from '@angular/core';
import { QuizQuestionComponent } from "../quiz-question/quiz-question.component";
import { AppService } from '../app.service';
import { Question } from  '../quiz-model/quiz.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent implements OnInit {
  percentage: number;
  score=0;
  TotalQuestions:number;
  icon:any;
  questionNAnswer: Question[] = [];
  dataInScore = history.state.data;
  dataForDetailedScr:Question[] = []
  constructor(private appService:AppService, private router: Router) {
    this.score = 0;
    this.TotalQuestions = 0;
    this.percentage=0;
   }
  ngOnInit(): void {
    let count =0;
    let array: Question[] = [];
    this.appService.getQuestionAndAnswer().subscribe((data)=>{
      this.questionNAnswer = data.questions;
      this.questionNAnswer.forEach(function (item) {
        let answerId = item.answer;
        if(history.state.data.has(item.questionId)){
          let a = history.state.data.get(item.questionId);
          let obj = a.options.find((item:any) => item.optionDesc === a.selectOption);
            if(item.answer === obj.optionId){
              count++;
            }
            Object.defineProperty(item, 'selectOption', {
              value: obj.optionId,
              writable: false,
              enumerable: true,
              configurable: true
            });
          }          
          array.push(item);
      });
      this.dataForDetailedScr = array;
      this.score = count;
      this.TotalQuestions = this.questionNAnswer.length;
      this.percentage = this.score/this.TotalQuestions * 100;
      if(this.percentage >= 0 && this.percentage <= 50){
        this.icon = "../../assets/images/sad.png";
      } else {
        this.icon = "../../assets/images/smiley.png";
      }
    });    
  }
  fnNavigateToResult(){
    this.router.navigateByUrl('/result',{state: {data:this.dataForDetailedScr}});
  }
}
