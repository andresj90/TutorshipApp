import { TutorshipPage } from './app.po';

describe('tutorship App', function() {
  let page: TutorshipPage;

  beforeEach(() => {
    page = new TutorshipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
