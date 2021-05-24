## Installation Steps

1. Clone repo
2. Run `npm install`
3. Add port to the  `.env` file
4. Add TOKEN to the `.env` file 
    
    Follow step 2 from this tutorial for generating the auth token and bot. 
    "Send Messages" in the bot permissions are all that is required.
    https://www.sitepoint.com/discord-bot-node-js/
    To get the token click on "Bot" in the left hand side, and click the copy token.
5. Add WEBHOOKID and WEBHOOKTOKEN to the `.env` file. 
    
    Follow step 1 to create the discord webhook. Then use that webhook URL to fill out the .env file. 
    https://www.digitalocean.com/community/tutorials/how-to-use-discord-webhooks-to-get-notifications-for-your-website-status-on-ubuntu-18-04 
    Example, 

    https://discord.com/api/webhooks/12345678910/T0kEn0fw3Bh00K 

    12345678910 is the WEBHOOKID 

    T0kEn0fw3Bh00K is the WEBHOOKTOKEN 
  
6. Run `node index.js`
7. Import postman scripts into postman https://www.postman.com/
8. Modifiy the tests to the new Token from step 4.
9. Run the tests
