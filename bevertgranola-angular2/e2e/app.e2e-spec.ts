import { BevertgranolaPage } from './app.po';

describe('bevertgranola App', function() {
  let page: BevertgranolaPage;

  beforeEach(() => {
    page = new BevertgranolaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
