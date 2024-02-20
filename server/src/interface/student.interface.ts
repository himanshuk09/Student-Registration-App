import { Document } from 'mongoose';
export interface IStudent extends Document {
  readonly name: string;
  // readonly class: string;
  // readonly gender: string;
  // readonly marks: string;
  readonly username:string;
  readonly email:string;
  readonly phoneno:string;
  readonly password:string;
  readonly confirmPassword:string;
}
export interface Stu extends Document{
  readonly email:string;
  readonly password:string;
}
