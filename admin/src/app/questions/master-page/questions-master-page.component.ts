import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QuestionService } from '../../providers/question.service';
import { Question } from '../notes';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-questions-master-page',
  templateUrl: './questions-master-page.component.html',
})
export class QuestionsMasterPageComponent implements OnInit {
  public questions: Question[] = [];

  public loading: boolean = false;

  constructor(
    private _questionService: QuestionService,
  ) {
  }

  ngOnInit(): void {
    this._questionService.getAll().subscribe(
      (questions: Question[]) => {
        this.questions = questions;
      }
    );
  }

  remove(id: number) {
    this.loading = true;
    this._questionService.remove(id).pipe(
        finalize(() => this.loading = false)
    ).subscribe(
        () => {
          this.questions = this.questions.filter((q) => q.id !== id);
        },
    );
  }

}
