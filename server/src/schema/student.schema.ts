import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Student {
  @Prop()
  name: string;
  @Prop()
  class: string;
  @Prop()
  gender: string;
  @Prop()
  marks: string;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
