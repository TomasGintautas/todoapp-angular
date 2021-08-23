import {Role} from "./role.model";

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  roles: Role[];
  created: string;
  updated: string;
}
