import * as Express from 'express';

// import { UserCredentials as UserCredentialsType } from '../types';
import { UserCredentials as Users } from '../data/models';


export const router = Express.Router();

const getUsers = async (req: Express.Request, res: Express.Response) => {
  // const { id } = req.params;

  // make sure id is a positive int
  // if (username === undefined || password === undefined) {
  //   return (res.status(400).json({ message: 'must provide username and password' }));
  // }

  try {
    const [result] = await Users.get();
    if (result) {
      // const token = generateToken(result);
      // return res.status(201).json({ token });
      return res.status(200).json(result);
    }
    return res.status(500).json({ message: 'error getting users' });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: 'error getting users',
    });
  }
};

console.log('line 33');
try {
  const [result]
}


// const getUserListings = async (req: Express.Request, res: Express.Response) => {
//   const { username, password } = req.body;

//   if (username === undefined || password === undefined) {
//     return (res.status(400).json({ message: 'must provide username and password' }));
//   }

//   try {
//     const result = await UserCredentials.getByUsername({ username }) as UserCredentialsType;
//     if (!!result && Bcrypt.compareSync(password, result.hashedPassword)) {
//       const token = generateToken(result);
//       return res.status(200).json({ token });
//     }
//     return res.status(403).json({ message: 'invalid credentials' });
//   } catch (error) {
//     return res.status(500).json({
//       error: 'error logging in',
//       message: error.message,
//     });
//   }
// };

router.get('/', getUsers);
// router.get('/:id', getUser);
// router.get('/:id/listings', getUserListings);

export default {};
