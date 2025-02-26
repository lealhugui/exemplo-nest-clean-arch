import { Controller, Get } from '@nestjs/common';
import { SaudarUseCase } from 'src/aplication/useCases/saudar.usecase';

@Controller()
export class AppController {
  constructor(private readonly saudarUC: SaudarUseCase) {}

  @Get('/hello')
  getHello() {
    return this.saudarUC.execute()
  }
}
