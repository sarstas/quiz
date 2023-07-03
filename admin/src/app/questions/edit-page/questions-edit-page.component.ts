import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromQuestionEdit, Question, QuestionEdit } from '../notes';
import { QuestionService } from '../../providers/question.service';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'app-questions-edit-page',
  templateUrl: './questions-edit-page.component.html',
})
export class QuestionsEditPageComponent implements OnInit {
  @Input() public question: QuestionEdit;

  public form!: FormGroup;

  public loading: boolean;

  constructor(
      private _fb: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _questionService: QuestionService,
  ) {
  }

  public ngOnInit() {
    this._initForm();
    this._initQuestion();
  }

  public submit() {
    const question: Question = fromQuestionEdit(this.form.value);

    let fn;
    if (this.question?.id) {
      fn = this._questionService.update(this.question.id, question)
    } else {
      fn = this._questionService.create(question)
    }

    this.loading = true;
    fn.pipe(
        tap(() => console.log(this.form.value)),
        finalize(() => this.loading = false)
    ).subscribe(() => this._router.navigate(['/']));
  }

  private _initForm() {
    this.form = this._fb.group({
      question: [''],
      description: [''],
      answers: this._fb.array([])
    });
  }

  private _initQuestion() {
    if (this.question) {
      this.form.patchValue(this.question);
      return;
    }

    this.question = this._route.snapshot.data.question;
    if (this.question) {
      this.form.patchValue(this.question);
    }
  }
}
