import { Injectable, NotFoundException } from '@nestjs/common';
import { Knex, InjectKnex } from 'nestjs-knex';
import { CreateProductInput } from './dto/create-product.input';
import { Products } from './dto/find-all-product.return-type';
import { ProductArgs } from './dto/find-all.products.query';
import { UpdateProductInput } from './dto/update-product.input';
import { Product, Status } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  create(createProductInput: CreateProductInput): Promise<Product> {
    return this.knex('products')
      .insert({ ...createProductInput })
      .returning('*')
      .then((dta: Product[]) => {
        return dta[0];
      });
  }

  async findAll(args: ProductArgs): Promise<Products[]> {
    const baseQuery = this.knex('products')
      .where({ 'products.status': args.status })
      .leftJoin('orders', { 'orders.product_id': 'products.id' })
      .leftJoin('users', { 'orders.user_id': 'users.id' })
      .select(
        this.knex.raw(
          `
to_json(products.*) as product,
jsonb_agg(users.*) as users`,
        ),
      )
      .groupBy('products.id');
    if (args.price) {
      baseQuery.where({ 'products.price': args.price });
    }

    return baseQuery.then((data: any) => {
      return data.map((item) => ({
        ...item,
        users: item.users[0] === null ? null : item.users,
      }));
    });
  }

  findOne(id: number): Promise<Product> {
    return this.knex('products')
      .where({ id: id })
      .select('*')
      .first()
      .then((data) => {
        if (!data) {
          throw new NotFoundException('data not found');
        }
        return data;
      });
  }

  update(updateProductInput: UpdateProductInput): Promise<Product> {
    const { id, ...data } = updateProductInput;
    return this.knex('products')
      .update({ ...data })
      .where({ id })
      .returning('*')
      .then((dta: Product[]) => {
        return dta[0];
      });
  }

  remove(id: number): Promise<boolean> {
    return this.knex('products')
      .del()
      .where({ id })
      .then((data: number) => {
        if (data > 0) {
          return true;
        }
        return false;
      });
  }
}
