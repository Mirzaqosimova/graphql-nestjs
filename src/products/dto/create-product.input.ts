import { InputType, Int, Field } from '@nestjs/graphql';
import { MeasurementType } from '../entities/product.entity';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: number;
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  price: number; 
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  amount: number;
  
  @Field(() => MeasurementType, { description: 'Example field (placeholder)' })
  measurement_type: MeasurementType;
}

