const { Logger } = require('../index')


describe('GIVEN a pattern of an endpoint', () => {

  test('then return the short name endpoint', () => {
    expect(Logger('GET /users')).toBe('get_all_users');
  });

  test('then return the short name endpoint', () => {
    expect(Logger('GET /users/bcd098')).toBe('get_user');
  });

  test('then return the short name endpoint', () => {
    expect(Logger('GET /users/543sdf')).toBe('get_user');
  });

  test('then return the short name endpoint', () => {
    expect(Logger('GET /investmentAccount/thisidlookslikewords/comments')).toBe('get_investment_account_comments');
  });

  test('then return the short name endpoint', () => {
    expect(Logger('GET /investmentAccount/thisisanidfortest/notifications')).toBe('get_investment_account_notifications');
  });

  test('then return an error if the id is not alphanumeric', () => {
    expect(
      () => {
        Logger('GET /investmentAccount/thisisa  nidfortest/notifications')
      }
    ).toThrow('The id is not alphanumeric');
  });

});
