import { Component, OnInit } from '@angular/core';
import { Question } from  '../quiz-model/quiz.model';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  questionNAnswer: Question[] = [];
  dataFromScore = history.state.data;
  constructor() {  }  
  ngOnInit(): void {

  }
}
