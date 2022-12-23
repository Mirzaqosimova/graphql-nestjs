import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {

  constructor(@InjectKnex() private readonly knex: Knex) {}
  //validation not implemented
  async create(createOrderInput: CreateOrderInput) {
    await this.knex('orders')
    .insert({
      ...createOrderInput
    })
    ;
   // return this.findOne()
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number): Promise<Order> {
    return  this.knex('orders')
    .where({'orders.id': id})
    .leftJoin('products',{'products.id':'orders.product_id'})
    .leftJoin('users',{'users.id':'orders.user_id'})
    .select(
      this.knex.raw(`orders.*, to_json(products.*) as product,to_json(users.*) as user `)
    )
    .first()
    .then((item: any)=>{const data: Order = item
    return data })
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
