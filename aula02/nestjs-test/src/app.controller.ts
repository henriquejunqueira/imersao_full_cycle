// import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller()
@Controller('/prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  @Get('/rota') // http://localhost:3000/prefixo/rota
  getHello(): string {
    return this.appService.getHello();
  }
}
