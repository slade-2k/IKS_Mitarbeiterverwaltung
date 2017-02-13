import { MitarbeiterverwaltungPage } from './app.po';

describe('mitarbeiterverwaltung App', function() {
  let page: MitarbeiterverwaltungPage;

  beforeEach(() => {
    page = new MitarbeiterverwaltungPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
