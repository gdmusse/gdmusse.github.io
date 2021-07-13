export type authenticationData = {
  id: string;
};

export type userCredentials = {
  email: string;
  password: string;
};

export type userInfo = {
  id: string;
  name: string;
  email: string;
};

export type userSignUpInfo = {
  name: string;
  email: string;
  password: string;
};

export type user = {
  id: string;
  email: string;
  name: string;
  password: string;
};

export type recipe = {
  title: string;
  description: string;
};

export type recipeInfo = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

export type recipeFullInfo = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  createdAt: string;
};
