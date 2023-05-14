const ENV = require('../env.js');

const auth = {
    tokenId: ENV.SB_TOKEN_ID,
    tokenSecret: ENV.SB_TOKEN_SECRET,
    consumerKey: ENV.SB_CONSUMER_KEY,
    consumerSecret: ENV.SB_CONSUMER_SECRET,
}

module.exports = auth;