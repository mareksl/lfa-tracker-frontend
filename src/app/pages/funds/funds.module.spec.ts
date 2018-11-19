import { FundsModule } from './funds.module';

describe('FundsModule', () => {
  let fundsModule: FundsModule;

  beforeEach(() => {
    fundsModule = new FundsModule();
  });

  it('should create an instance', () => {
    expect(fundsModule).toBeTruthy();
  });
});
