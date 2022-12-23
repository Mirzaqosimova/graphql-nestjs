import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  product_id: number; 
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  user_id: number;  
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  amount: number;
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  price: number;
}
