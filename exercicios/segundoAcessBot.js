const env = require('../.env');
const telegraf = require('telegraf');
const bot = new telegraf(env.token);
const credencial = env.credencial;


bot.start( ctx => {
  const user = ctx.update.message.from;
  //console.log(user);

  if(ctx.update.message.from.id == credencial){
  ctx.reply(`Seja bem vindo, ${user.first_name}!`);
  }
  else{
  ctx.reply(`Você não tem acesso as diretrizes do sistema.`);
  ctx.reply(`Digite Entrar`);
  } 
})

bot.on('text', async (ctx , next)=>{
 await ctx.reply('dados1');
 next()
})

bot.on('text', async (ctx , next)=>{
    await ctx.reply('dados2');
    next();
})

bot.on('location', async (ctx,next) =>{
  const local = ctx.update.message.location;
  //console.log(local);
  await ctx.reply(`Entendido, você está em 
     Latitude: ${local.latitude},
     Longitude: ${local.longitude}.`);
})

bot.on('contact', (ctx,next)=>{
  const contact = ctx.update.message.contact;
  //console.log(contact)
  ctx.reply(`Vou adicionar o contato(a)
      ${contact.first_name} ${contact.phone_number}`);
})

bot.on('voice', (ctx, next)=>{
  const voice = ctx.update.message.voice;
  //console.log(voice)
  ctx.reply(`Audio recebido, duração de ${voice.duration} segundos`);

})

bot.on('photo',(ctx, next)=>{
   const photoenviada = ctx.update.message.photo;
   //console.log(photoenviada);
   //ctx.reply(`Imagem enviada com sucesso: ${photoenviada}`);
   ctx.reply('Foto Enviada com sucesso!')
   photoenviada.forEach((photo,i) => {
    ctx.reply(`Foto ${i} tem resolução de ${photo.width}x${photo.height}`);
   })
})

bot.startPolling();