describe('Edupills app', () => {

  beforeEach(() => {
    browser.get('');
  });


  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('All courses');
  });

  it('should have {nav}', () => {
    expect(element(by.css('ion-navbar')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Home', () => {
    expect(element(by.css('ion-navbar:first-child')).getText()).toContain('ALL COURSES');
  });

  it('has a menu button that displays the left menu', () => {
    element(by.css('.bar-button-menutoggle')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        expect(element.all(by.css('.toolbar-title')).first().getText()).toEqual('');
      });
  });

  it('the left menu has a link with title ALL COURSES', () => {
    element(by.css('.bar-button-menutoggle')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        expect(element.all(by.css('ion-label')).get(1).getText()).toEqual('ALL COURSES');
      });
  });

  it('the left menu has a link with title USERS', () => {
    element(by.css('.bar-button-menutoggle')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        expect(element.all(by.css('ion-label')).get(2).getText()).toEqual('USER');
      });
  });

  it('enter in section USERS', () => {
    element(by.css('.bar-button-menutoggle')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        element(by.id('idPageUser')).click();
        browser.driver.sleep(2000); // wait for the animation
        expect(element(by.className('user-mail')).getText()).toEqual('iguana@gmail.com');
      });
  });

});
