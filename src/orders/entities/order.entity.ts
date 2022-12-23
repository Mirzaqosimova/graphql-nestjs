import { User } from './../../users/entities/user.entity';
import { Product, Status } from './../../products/entities/product.entity';
import { ObjectType, Field, Int, GraphQLTimestamp } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;  
  
  @Field(() => Product, { description: 'Example field (placeholder)' })
  product: Product; 
  
  @Field(() => User, { description: 'Example field (placeholder)' })
  user: User;  
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  amount: number;
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  price: number;

  @Field(() => Status, { description: 'Example field (placeholder)' })
  status: Status;
  
  @Field(() => GraphQLTimestamp, { description: 'Example field (placeholder)' })
  created_at: String;
}
