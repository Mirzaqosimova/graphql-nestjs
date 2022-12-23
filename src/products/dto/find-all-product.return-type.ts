import { User } from '../../users/entities/user.entity';
import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "../entities/product.entity";

@ObjectType()
export class Products{

    @Field(() => Product)
    product: Product
    
    @Field(() => [User],{nullable:true})
    users?: User[]


}