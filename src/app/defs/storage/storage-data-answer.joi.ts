import * as Joi from 'joi';

export const StorageDataAnswerJoi = Joi.object().keys({
  id: Joi.string().required(),
  text: Joi.string().required(),
  truth: Joi.number().min(0).max(1).required()
});
