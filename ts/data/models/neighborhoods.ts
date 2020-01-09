import { Neighborhood } from '../../types';
import { basicModelTemplate } from './basicModelTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

const model = basicModelTemplate<Neighborhood>({
  tableName: 'neighborhoods',
  preprocessData: ((data) => convertObjectCamelToSnake({ obj: data })),
  processResult: ((result) => convertObjectSnakeToCamel({ obj: result }) as Neighborhood),
});

export default {
  get: model.get,
  // insert: model.insert,
  // update: model.update,
  // remove: model.remove,
};
