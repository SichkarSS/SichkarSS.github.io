import { EventSearcherModule } from './event-searcher.module';

describe('EventSearcherModule', () => {
  let eventSearcherModule: EventSearcherModule;

  beforeEach(() => {
    eventSearcherModule = new EventSearcherModule();
  });

  it('should create an instance', () => {
    expect(eventSearcherModule).toBeTruthy();
  });
});
