const dbPatterns = [
  { pattern: 'GET /users', endpoint: 'get_all_users' },
  { pattern: 'GET /users/<ID>', endpoint: 'get_user' },
  { pattern: 'GET /users/<ID>/<ID>', endpoint: 'get_user_guests_in_account' },
  { pattern: 'GET /users/<ID>/configuration', endpoint: 'get_user_configuration' },
  { pattern: 'GET /investmentAccount/<ID>', endpoint: 'get_investment_account' },
  { pattern: 'GET /investmentAccount/<ID>/comments', endpoint: 'get_investment_account_comments' },
  { pattern: 'GET /investmentAccount/<ID>/notifications', endpoint: 'get_investment_account_notifications' },
  { pattern: 'GET /investmentAccount/<ID>/notifications/<ID>', endpoint: 'get_investment_account_notification' },
  { pattern: 'DELETE /trusts/<ID>', endpoint: 'delete_comment' },
  { pattern: 'POST /trusts/<ID>', endpoint: 'post_comment' },
  { pattern: 'POST /investmentAccount', endpoint: 'post_investmentAccount' },
  { pattern: 'PATCH /comments/<ID>', endpoint: 'patch_comment' },
  { pattern: 'PUT /comments/<ID>', endpoint: 'put_comment' }
]

const reservedWords = [
  'users',
  'configuration',
  'investmentAccount',
  'comments',
  'notifications',
  'trusts',
]

module.exports = {
  dbPatterns,
  reservedWords
}