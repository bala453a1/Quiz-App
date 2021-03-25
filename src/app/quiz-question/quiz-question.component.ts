import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../quiz-model/quiz.model';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
  @Input('quizData')
  question: Question;
  counter: number;
  dataWithAnswer = new Map([])
  constructor() { 
    this.question = {};
    this.counter = -1;
  }
  ngOnChanges() {
    this.counter++;
  }
  ngOnInit(): void {
  }
  getSelectedOption(event: any) {
    Object.defineProperty(this.question, 'selectOption', {
      value: event.target.value,
      writable: false,
      enumerable: true,
      configurable: true
    });
    this.dataWithAnswer.set(this.question.questionId,this.question);
    this.getQuestionWithUserAnswer();
  }
  getQuestionWithUserAnswer(){
    return this.dataWithAnswer;
  }
}
