import db from '../dbConfig';
import { User } from '../../types';
import { basicModelTemplate } from './basicModelTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

const tableName = 'users';

const model = basicModelTemplate<User>({
  tableName,
  preprocessData: ((data) => convertObjectCamelToSnake({ obj: data })),
  processResult: ((result) => convertObjectSnakeToCamel({ obj: result })),
});

interface GetByEmailArg {
  email: string,
}

const getByEmail = ({ email }: GetByEmailArg) => (db(tableName)
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
