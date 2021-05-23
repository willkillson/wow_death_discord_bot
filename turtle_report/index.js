require('dotenv').config();

const Discord = require('discord.js');
const fs = require('fs');
const Jimp = require('jimp');

const express = require('express');
const app = express();

const TOKEN = process.env.TOKEN;
const PORT = process.env.PORT;

const MAP_IMAGE_WIDTH = 772;
const MAP_IMAGE_HEIGHT = 515;
const CURSOR_SIZE = 32;

///////////////////////////////////////////
// Bot
///////////////////////////////////////////

/*

  The bot is not currently being used, just the webhook. I left this in for more features in the future.

*/

const bot = new Discord.Client();

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async msg => {
  if(msg.content.startsWith('!tr')){
    msg.reply("Hello!");
  }
});


///////////////////////////////////////////
// Webhook
///////////////////////////////////////////

const hook = new Discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN);

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/api/msg', async (req, res) => {

    console.log(req.body);

    if(req.body.token!==TOKEN){
      res.status(401).send("Invalid TOKEN, access denied.");
      res.end();
      return;
    }

    let map_id = req.body.map_id;
    let player_name = req.body.player_name;
    let x_cordinate = parseFloat(req.body.local_pos_x);
    let y_cordinate = parseFloat(req.body.local_pos_y);
    x_cordinate = x_cordinate/100;
    y_cordinate = y_cordinate/100;

    try{
      ///////////////// Image input
      let image_background = await Jimp.read('./data/background/background.jpg');
      let image_map_frame = await Jimp.read('./data/background/border.png');
      let image_mark = await Jimp.read('./data/icons/X_icon.png');
      let image_map = await Jimp.read(`./data/maps/${map_id}.jpg`);

      // Resizes the images.
      image_mark.resize(CURSOR_SIZE,CURSOR_SIZE);
      image_background.resize(900,666);

      // Place the death marker on the map.
      image_map.composite(image_mark,MAP_IMAGE_WIDTH*x_cordinate-(CURSOR_SIZE/2), MAP_IMAGE_HEIGHT*y_cordinate-(CURSOR_SIZE/2));
      //  Place the map into the map frame.
      image_map_frame.composite(image_map,26,29);
      //  Place the mapframe+map into the background.
      image_background.composite(image_map_frame,30, 50);
      
      await image_background.writeAsync('./image_out.png');

      ///////////////// Image output
      hook.send("Hero "+ player_name+" has fallen.", {files: ["./image_out.png"]}); 
      console.log("Hero "+ player_name+" has fallen on map "+map_id +" at location "+x_cordinate+" "+y_cordinate);
    
      res.end();
    }catch(e){
      console.log(e);
    }
});

app.listen(PORT, () => {
  console.log(`Application is listening at http://localhost:${PORT}`)
})