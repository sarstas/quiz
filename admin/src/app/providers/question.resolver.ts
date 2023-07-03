import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { QuestionService } from './question.service';
import { LoadingGlobalState } from './loading-global.state';
import { Question, QuestionEdit, toQuestionEdit } from '../questions/notes';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionResolver implements Resolve<QuestionEdit | boolean> {
  constructor(
    private _questionService: QuestionService,
    private _loadingGlobalState: LoadingGlobalState,
    private _router: Router,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<QuestionEdit> | Promise<boolean> {
    const id: number = +route.paramMap.get('id')!;

    this._loadingGlobalState.loading = true;
    return this._questionService.get(id).pipe(
      finalize(() => this._loadingGlobalState.loading = false),
      map((question: Question) => toQuestionEdit(question)),
      catchError((err) => {
        this._router.navigate(['/']);
        return throwError(err);
      })
    );
  }
}
