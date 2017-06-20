import { NotesapplicationPage } from './app.po';

describe('notesapplication App', () => {
  let page: NotesapplicationPage;

  beforeEach(() => {
    page = new NotesapplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
