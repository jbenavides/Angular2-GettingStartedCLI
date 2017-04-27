import { GettingStartedAngular2CLIPage } from './app.po';

describe('getting-started-angular2-cli App', () => {
  let page: GettingStartedAngular2CLIPage;

  beforeEach(() => {
    page = new GettingStartedAngular2CLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
