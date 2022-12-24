import { ObjectType, Field, Int, registerEnumType, GraphQLTimestamp } from '@nestjs/graphql';

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
  
  @Field(() => MeasurementType, { description: 'Example field (placeholder)' })
  measurement_type: MeasurementType;
  
  @Field(() => Status, { description: 'Example field (placeholder)' })
  status: Status;
  
  @Field(() => GraphQLTimestamp, { description: 'Example field (placeholder)' })
  created_at: String;


}

export enum MeasurementType{
  KG = 'KG', L= 'L',M='M',GR='GR',T='T',KM='KM'
}

export enum Status{
  ACTIVE = 'ACTIVE', DELETE = 'DELETE',BLOCK = 'BLOCK'
}

registerEnumType(Status, {
  name: 'Status',
});

registerEnumType(MeasurementType, {
  name: 'MeasurementType',
});