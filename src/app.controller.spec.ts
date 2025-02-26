import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './infra/controller/app.controller';
import { SudacaoRepositoryImplementation } from './infra/repository/saudacao.repository';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [SudacaoRepositoryImplementation],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
