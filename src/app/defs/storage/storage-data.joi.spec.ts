import {StorageDataJoi} from './storage-data.joi';

describe('StorageDataJoi', () => {
  it('should validate valid storageData', () => {
    const result = StorageDataJoi.validate(getValid());
    expect(result.error).toBeFalsy();
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
            "text": "True answer option text./n May be multine",
            "truth": 0
          },
          {
            "text": "False answer option text.",
            "truth": 0
          },
        ]
      }
    ]
  }
}
