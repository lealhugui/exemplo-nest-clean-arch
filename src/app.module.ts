import { Module } from '@nestjs/common';
import { AppController } from './infra/controller/app.controller';
import { SudacaoRepositoryImplementation } from './infra/repository/saudacao.repository';
import { SaudarUseCase } from './aplication/useCases/saudar.usecase';
import { SudacaoAPIRepositoryImplementation } from './infra/repository/saudacao2.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SaudarUseCase, {
    provide: 'SaudacaoRepository',
    useClass: process.env.IS_NOVA_IMPLENTACAO === '1' ?
      SudacaoAPIRepositoryImplementation :
      SudacaoRepositoryImplementation
  }],
})
export class AppModule {}
