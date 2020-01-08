import { User } from '../../types';
import { basicModelTemplate } from './basicModelTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

const model = basicModelTemplate<User>({
  tableName: 'users',
  preprocessData: ((data) => convertObjectCamelToSnake({ obj: data })),
  processResult: ((result) => convertObjectSnakeToCamel({ obj: result })),
});

export default {
  get: model.get,
  insert: model.insert,
  update: model.update,
  remove: model.remove,
};
