import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsMasterPageComponent } from './master-page/questions-master-page.component';
import { QuestionsEditPageComponent } from './edit-page/questions-edit-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersEditComponent } from './answers-edit/answers-edit.component';
import { ConfirmDirective } from '../providers/confirm.directive';

@NgModule({
  declarations: [
    QuestionsMasterPageComponent,
    QuestionsEditPageComponent,
    QuestionsComponent,
    AnswersEditComponent,
    ConfirmDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    QuestionsRoutingModule
  ],
})
export class QuestionsModule {
}
