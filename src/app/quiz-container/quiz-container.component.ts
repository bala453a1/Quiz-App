import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Question, Quiz } from '../quiz-model/quiz.model';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { QuizQuestionComponent } from "../quiz-question/quiz-question.component";

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class QuizContainerComponent implements OnInit {
  @ViewChild(QuizQuestionComponent) dataWithSelectedAnswer:any;
  quizQuestions: Question[] = [];
  currentQuestionIndex = 0;
  currentQuestion: Question = {};
  timeLeft: number = 10;
  progressbarValue:number;
  interval: any;
  questionLength :number;
  questionNumber: number;

  constructor(private appService:AppService, private router: Router) {
    this.questionNumber = 0;
    this.progressbarValue = 10;
    this.questionLength = 0;
   }

  ngOnInit(): void {
    this.appService.questionsNOptions().subscribe((data) => {
      this.quizQuestions = data.questions
      this.questionLength = this.quizQuestions.length;
      this.nextQuestion(event);
    });
  }
  nextQuestion(event:any) {
    this.questionNumber++;
    let data = this.dataWithSelectedAnswer.getQuestionWithUserAnswer();
    if(this.questionNumber > this.quizQuestions.length){
      this.router.navigateByUrl('/score',{state: {data:data}});
    }
    this.currentQuestion = this.quizQuestions[this.currentQuestionIndex];
    this.currentQuestionIndex++;
    this.timeLeft = 10;
    if(this.questionNumber === this.quizQuestions.length){
      event.target.innerText = "Submit";
    }
  }
  startTimer() {
  this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }else if(this.questionNumber <= this.quizQuestions.length){
        this.nextQuestion(event);
      }
    },1000)
  }
  ngAfterViewInit(){
    this.startTimer();
  }
}