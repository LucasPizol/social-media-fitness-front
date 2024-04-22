export interface UserModel {
  id: number;
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
