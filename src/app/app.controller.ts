import { Controller, Get } from '@nestjs/common';
import { IBaseMessageFeedback } from '@shared/contracts';

@Controller()
export class AppController {
  @Get()
  getHello(): IBaseMessageFeedback {
    return {
      message: 'Hello World!',
    }
  }
}
