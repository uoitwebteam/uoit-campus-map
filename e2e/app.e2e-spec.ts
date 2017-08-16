import { ContextMenuPage } from './app.po';

describe('context-menu App', () => {
  let page: ContextMenuPage;

  beforeEach(() => {
    page = new ContextMenuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
