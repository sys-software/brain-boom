import * as Joi from 'joi';

export const StorageDataAnswerJoi = Joi.object().keys({
  text: Joi.string(),
  truth: Joi.number().min(0).max(1)
});
