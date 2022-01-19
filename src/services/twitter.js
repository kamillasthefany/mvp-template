require('dotenv').config();

const twit = require('twit');

const bot = new twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

module.exports = {
  async run(palavraChave) {
    try {
      const result = await getTweets(palavraChave);
      return result.statuses;
    }
    catch (error) {
      console.log('Erro', error);
    }
  }
}

function getTweets() {
  return new Promise((resolve, reject) => {
    let params = {
      q: 'adele since:2011-07-11',
      count: 2,
    };

    bot.get('search/tweets', params, (erro, data) => {
      if (erro) {
        return reject(erro);
      }
      return resolve(data);
    });
  });
}