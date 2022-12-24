import { ObjectType, Field, Int, registerEnumType, GraphQLTimestamp } from '@nestjs/graphql';
import { Status } from '@/products/entities/product.entity';

@ObjectType()
export class User {

  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  first_name: String;
  
  @Field(() => String, { description: 'Example field (placeholder)' })
  last_name: String;
  
  @Field(() => GraphQLTimestamp, { description: 'Example field (placeholder)' })
  gender: string;

  @Field(() => Status, { description: 'Example field (placeholder)' })
  status: Status;
  
  @Field(() => GraphQLTimestamp, { description: 'Example field (placeholder)' })
  created_at: String;
}
  export enum Gender{
    FEMALE = 'FEMALE', MALE = 'MALE',UNKNOWN = 'UNKNOWN'
  }
  
  registerEnumType(Gender, {
    name: 'Gender',
  });