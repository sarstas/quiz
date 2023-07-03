import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question, toQuestion } from '../questions/notes';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  get api() {
    return `http://localhost:3003/questions/`;
  }

  constructor(
    private _http: HttpClient
  ) {
  }

  public getAll(): Observable<Question[]> {
    return this._http.get<Question[]>(`${this.api}`);
  }

  public get(id: number): Observable<Question> {
    return this._http.get<Question>(`${this.api}${id}`);
  }

  public create(question: Question) {
    const correctQuestion: Question = {
      ...question,
      answers: toQuestion(question.answers)
    }

    return this._http.post(this.api, correctQuestion);
  }

  public update(id, question) {
    return this._http.put(this.api + id, question);
  }

  public remove(id: number): Observable<unknown> {
    return this._http.delete(`${this.api}${id}`);
  }
}
