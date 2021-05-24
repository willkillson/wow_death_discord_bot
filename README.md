## Introduction

This is a quick demo of a discord bot that announces deaths for private wow servers. The use case for this bot would be to allow a community to be able to see deaths in hardcore modes.
    
![image](https://user-images.githubusercontent.com/26101774/119303848-3e485a00-bc1b-11eb-8751-ffc91f56b07c.png)
![image](https://user-images.githubusercontent.com/26101774/119303863-430d0e00-bc1b-11eb-9e48-6bacd9909c91.png)
![image](https://user-images.githubusercontent.com/26101774/119303869-4607fe80-bc1b-11eb-86bf-e296092a21b0.png)


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
8. Modifiy the tests to include the new Token from step 4.
    ![image](https://user-images.githubusercontent.com/26101774/119303713-11944280-bc1b-11eb-9d19-cf797731dee5.png)
9. Run the tests
