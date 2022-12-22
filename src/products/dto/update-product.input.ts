import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '../entities/product.entity';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Status, { description: 'Example field (placeholder)' })
  status: Status;
}
