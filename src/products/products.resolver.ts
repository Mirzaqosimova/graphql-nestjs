import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product, Status } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Products } from './dto/find-all-product.return-type';
import { ProductArgs } from './dto/find-all.products.query';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Products], { name: 'products' })
  findAll(
    @Args() args: ProductArgs
  ): Promise<Products[]> {
    return this.productsService.findAll(args);
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return this.productsService.update(updateProductInput);
  }

  @Mutation(() => Boolean)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.remove(id);
  }
}
