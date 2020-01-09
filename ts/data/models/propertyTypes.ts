import { Propterty } from '../../types';
import { basicModelTemplate } from './basicModelTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

const model = basicModelTemplate<Propterty>({
  tableName: 'propterty_types',
  preprocessData: ((data) => convertObjectCamelToSnake({ obj: data })),
  processResult: ((result) => convertObjectSnakeToCamel({ obj: result }) as Propterty),
});

export default {
  get: model.get,
  // insert: model.insert,
  // update: model.update,
  // remove: model.remove,
};
