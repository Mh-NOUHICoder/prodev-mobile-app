export interface RootStackParamList {
  Login: undefined;
  Join: undefined;
}

export interface UserForm {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  confirmPassword?: string;
}