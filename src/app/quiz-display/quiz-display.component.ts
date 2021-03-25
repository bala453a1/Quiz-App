import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Question } from '../quiz-model/quiz.model';

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})
export class QuizDisplayComponent implements OnInit {
  counter: number;
  dataWithAnswer = new Map([])
  @Input('quizData')
  question: Question;
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
      value: event.target.innerText,
      writable: false,
      enumerable: true,
      configurable: true
    });
    this.dataWithAnswer.set(this.question.questionId,this.question);
    let green = document.querySelectorAll(".btn-success");
    green.forEach(function (value) {
      value.classList.remove('btn-success');
    });
    event.target.setAttribute("class", "btn btn-success");
  }
}
