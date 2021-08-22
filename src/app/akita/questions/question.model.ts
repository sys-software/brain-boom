import {StorageDataQuestion} from '../../defs/storage/storage-data-question';

let nextId = 1;

export interface Question extends StorageDataQuestion {
  id: string;
}

export function createQuestion(params: Partial<Question>) {
  return {
    ...params,
    id: params.id ? params.id : ('' + nextId++)
  } as Question;
}
