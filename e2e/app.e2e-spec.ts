import { LazyLodingPage } from './app.po';

describe('lazy-loding App', () => {
  let page: LazyLodingPage;

  beforeEach(() => {
    page = new LazyLodingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
