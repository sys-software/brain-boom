import * as Joi from 'joi';
import {StorageDataAnswerJoi} from './storage-data-answer.joi';

export const StorageDataQuestionJoi = Joi.object().keys({
  questionText: Joi.string().required(),
  questionPicture: Joi.string(),
  answers: Joi.array().items(StorageDataAnswerJoi).required(),
});
