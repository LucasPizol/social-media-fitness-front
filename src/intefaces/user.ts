export interface UserModel {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthenticatedUserModel extends UserModel {
  token: string;
}

export interface UserCredentialsModel {
  email: string;
  password: string;
}

export interface UserRegisterModel {
  name: string;
  email: string;
  password: string;
}