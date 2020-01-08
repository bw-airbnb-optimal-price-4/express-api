import db from '../dbConfig';
// import { User } from '../../types';
// import { basicModelTemplate } from './basicModelTemplate';

(async () => {
  const result = await db('amenities');
  console.log(result);
})();

export default {};

// const model = basicModelTemplate<User>({
//   tableName: 'users',
//   preprocessData: ({ username, password }) => ({
//     username,
//     password: hashedPassword,
//   }),
//   processResult: ({ id, username }) => ({
//     id,
//     username,
//   }),
// });

// interface GetByUsernameArg {
//   username: string,
// }

// const getByUsername = ({ username }: GetByUsernameArg) => (db('user_credentials')
//   .where({ username })
//   .first()
//   .then((result) => (
//     (result)
//       ? {
//         id: result.id,
//         username: result.username,
//         hashedPassword: result.hashed_password,
//       }
//       : undefined
//   ))
// );

// export default {
//   get: model.get,
//   insert: model.insert,
//   getByUsername,
// };
