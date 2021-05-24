## Introduction

This is a quick demo of a discord bot that announces deaths for private wow servers. The use case for this bot would be to allow a community to be able to see deaths in hardcore modes. If you would like a demo of this software, or need help integrating please reach out to me in this discord channel https://discord.gg/r2b55UEFxh
    
![image](https://user-images.githubusercontent.com/26101774/119417079-e86ec300-bca9-11eb-96a4-4ea955c33108.png)

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

## Integrating

See the postman scripts for details on the json payload. CURL could be used to send out a request to node webserver.
Replace localhost with the ip address, and make sure the ports are forwarded. 

C code
```c
CURL *curl;
CURLcode res;
curl = curl_easy_init();
if(curl) {
  curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "POST");
  curl_easy_setopt(curl, CURLOPT_URL, "http://localhost:3000/api/msg");
  curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
  curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL, "https");
  struct curl_slist *headers = NULL;
  headers = curl_slist_append(headers, "Content-Type: application/json");
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
  const char *data = "{\r\n    \"player_name\":\"ikillalot\",\r\n    \"map_id\":\"215\",\r\n    \"local_pos_x\":\"63.2\",\r\n    \"local_pos_y\":\"82.3\",\r\n    \"token\":\"SECRESSECSEFCSERSERSERSER\"\r\n}";
  curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);
  res = curl_easy_perform(curl);
}
curl_easy_cleanup(curl);
```
