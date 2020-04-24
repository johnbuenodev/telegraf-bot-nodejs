const env = require('../.env');
const telegraf = require('telegraf');
const bot = new telegraf(env.token);


bot.start( ctx => {
  const from = ctx.update.message.from;
  console.log(from);
  ctx.reply(`Seja bem vindo, ${from.first_name}!`);
})


bot.startPolling();