import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {

  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  price: number; 
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  amount: number;
  
  @Field(() => String, { description: 'Example field (placeholder)' })
  measurement_type: String;
  
  @Field(() => String, { description: 'Example field (placeholder)' })
  status: String;
  
  @Field(() => String, { description: 'Example field (placeholder)' })
  created_at: String;


}
