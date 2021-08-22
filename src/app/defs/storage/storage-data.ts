import {StorageDataVersion} from "./storage-data-version";
import {StorageDataQuestion} from './storage-data-question';

export interface StorageData {
  version: StorageDataVersion,
  questions: StorageDataQuestion[]
}
