import { userModel } from '../models/user.model';

export const createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error('All fields are required');
  }

  const user = userModel.create({
    firstname,
    lastname,
    email,
    password,
  });

  return user;
};
