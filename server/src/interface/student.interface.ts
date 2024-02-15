import { Document } from 'mongoose';
export interface IStudent extends Document {
  readonly name: string;
  readonly class: string;
  readonly gender: string;
  readonly marks: string;
}
