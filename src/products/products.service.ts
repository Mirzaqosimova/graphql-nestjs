import { Injectable } from '@nestjs/common';
import { Knex, InjectKnex } from 'nestjs-knex';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product, Status } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectKnex() private readonly knex: Knex
  ) {}
  create(createProductInput: CreateProductInput): Promise<Product> {
return this.knex('products')
.insert({...createProductInput})
.returning('*')
.then((dta:Product[])=>{return dta[0]}) 
  }

  findAll(status: Status): Promise<Product[]>{    
    return this.knex('products')
    .where({status: Status[status]})
    .select('*');
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

