import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// @Injectable()
// class Service1 {
//   constructor(private appService: AppService) {}
// }
