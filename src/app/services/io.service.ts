import { Injectable } from '@angular/core';
import {StorageData} from '../defs/storage/storage-data';
import {StorageDataJoi} from '../defs/storage/storage-data.joi';
import {QuestionsStore} from '../akita/questions/questions.store';
import {createQuestion} from '../akita/questions/question.model';

@Injectable({
  providedIn: 'root'
})
export class IoService {

  constructor(private qs: QuestionsStore) { }

  importFromString(data: string) {
    let d:StorageData;
    try {
      d = JSON.parse(data)
    } catch (e) {
      alert('Import error: Incorrect JSON format')
      return
    }

    if(!this.validateImported(d)) {
      alert('Import error: Incorrect examination data format')
      return
    }

    this.importExam(d)
  }

  private importExam(d: StorageData) {
    this.qs.set(d.questions.map(q => createQuestion(q)))
  }

  private validateImported(data: StorageData) {
    const v = StorageDataJoi.validate(data, {abortEarly: false})
    if(v.error) {
      console.error('Found wrong examination data format', v)
      return false
    }
    return true
  }
}
