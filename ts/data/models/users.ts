import { User } from '../../types';
import db from '../dbConfig';
import { basicModelTemplate } from './basicModelTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

const model = basicModelTemplate<User>({
  tableName: 'users',
  preprocessData: ((data) => convertObjectCamelToSnake({ obj: data })),
  processResult: ((result) => convertObjectSnakeToCamel({ obj: result })),
});

interface GetByEmailArg {
  email: string,
}

const getByEmail = ({ email }: GetByEmailArg) => (db('users')
  .where({ email })
  .first()
  .then((result) => (
    (result)
      ? {
        id: result.id,
        email: result.email,
        hashedPassword: result.password,
      }
      : undefined
  ))
);

export default {
  get: model.get,
  insert: model.insert,
  update: model.update,
  getByEmail,
};
