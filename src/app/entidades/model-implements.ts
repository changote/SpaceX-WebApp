import { IRegistro, IUser } from "./model-interface";

export class User implements IUser{
  id: number | null = null;
  username: string = '';
  password: string = '';
}

export class Registro implements IRegistro{
  id: number | null = null;
  name: string = '';
  last_name: string = '';
  username: string = '';
  gender: string = '';
  email: string = '';
  age: number = 0;
  password: string = '';
}