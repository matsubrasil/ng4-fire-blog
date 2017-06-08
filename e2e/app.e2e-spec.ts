import { BlogNg4Page } from './app.po';

describe('blog-ng4 App', () => {
  let page: BlogNg4Page;

  beforeEach(() => {
    page = new BlogNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
