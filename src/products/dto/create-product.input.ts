import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: number;
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  price: number; 
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  amount: number;
  
  @Field(() => String, { description: 'Example field (placeholder)' })
  measurement_type: String;
}

enum MeasurementType{
  KG, L,M,GR,T,KM
}