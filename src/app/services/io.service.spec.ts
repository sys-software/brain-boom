import { TestBed } from '@angular/core/testing';

import { IoService } from './io.service';
import {QuestionsStore} from '../akita/questions/questions.store';

describe('IoService', () => {
  let service: IoService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(IoService);
  // });
  //
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should set questions to akita when call importFromString', () => {
    const exam = getValid()
    const questionsStoreSpy = jasmine.createSpyObj('QuestionsStore', ['set']);
    service = new IoService(questionsStoreSpy)
    service.importFromString(JSON.stringify(exam))
    expect(questionsStoreSpy.set).toHaveBeenCalledWith([{...exam.questions[0], id: '1'}]);
  });
});

function getValid() {
  return {
    "version": "bbb1",
    "questions": [
      {
        "questionText": "To be or not to be?",
        "questionPicture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
        "answers": [
          {
            "id": "1",
            "text": "True answer option text./n May be multine",
            "truth": 1
          },
          {
            "id": "2",
            "text": "False answer option text.",
            "truth": 0
          },
        ]
      }
    ]
  }
}
