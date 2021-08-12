import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { QuestionsStore, QuestionsState } from './questions.store';

@Injectable({ providedIn: 'root' })
export class QuestionsQuery extends QueryEntity<QuestionsState> {

  constructor(protected store: QuestionsStore) {
    super(store);
  }

}
