import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Student {
  @Prop()
  name: string;
  // @Prop()
  // class: string;
  // @Prop()
  // gender: string;
  // @Prop()
  // marks: string;
  @Prop()
  username: string;
  @Prop()
  email: string;
  @Prop()
  phoneno: string;
  @Prop()
  password: string;
  @Prop()
  confirmPassword: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
