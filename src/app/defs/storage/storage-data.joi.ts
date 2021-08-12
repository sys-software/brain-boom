import * as Joi from 'joi';
import {StorageDataVersionJoi} from './storage-data-version.joi';
import {StorageDataQuestionJoi} from './storage-data-question.joi';

export const StorageDataJoi = Joi.object().keys({
  version: StorageDataVersionJoi.required(),
  questions: Joi.array().items(StorageDataQuestionJoi).required(),
});
