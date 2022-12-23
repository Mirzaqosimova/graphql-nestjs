import { ArgsType, Field, Int } from "@nestjs/graphql";
import { Status } from "../entities/product.entity";

@ArgsType()
export class ProductArgs {

  @Field(() => Status,{ defaultValue: Status.ACTIVE })
  status: Status;

  @Field(() => Int, {nullable: true})
  price?: number; 
}