import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { KnexModule } from 'nestjs-knex';
import { DatabaseConfig } from './shared/database';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      }
    }),
    UsersModule,
    ProductsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      useClass: DatabaseConfig,
    }),
    OrdersModule,
    
  ],
  controllers: [AppController],
})
export class AppModule {}
