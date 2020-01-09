import { Amenity } from '../../types';
import { basicModelTemplate } from './basicModelTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

const model = basicModelTemplate<Amenity>({
  tableName: 'amenities',
  preprocessData: ((data) => convertObjectCamelToSnake({ obj: data })),
  processResult: ((result) => convertObjectSnakeToCamel({ obj: result }) as Amenity),
});

export default {
  get: model.get,
  // insert: model.insert,
  // update: model.update,
  // remove: model.remove,
};
