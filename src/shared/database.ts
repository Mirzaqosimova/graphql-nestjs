import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KnexModuleOptions, KnexModuleOptionsFactory } from 'nestjs-knex';

@Injectable()
export class DatabaseConfig implements KnexModuleOptionsFactory {
  constructor(private configService: ConfigService) {}

  createKnexModuleOptions(): Promise<KnexModuleOptions> | KnexModuleOptions {
    return {
      config: {
        client: this.configService.get('DB_CLIENT'),
        connection: {
          host: this.configService.get('DB_HOST'),
          port: +this.configService.get('DB_PORT'),
          user: this.configService.get('DB_USER'),
          password: this.configService.get('DB_PASSWORD'),
          database: this.configService.get('DB_NAME'),
        },
      },
    } as KnexModuleOptions;
  }
}
