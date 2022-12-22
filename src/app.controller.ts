import { Body, Controller, Headers, Get, Param, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ping')
  ping(
    @Param() params: any,
    @Body() body: any,
    @Query() query: any,
    @Headers() headers: any,
  ) {
    return {
      params,
      body,
      query,
      headers,
    };
  }
}
