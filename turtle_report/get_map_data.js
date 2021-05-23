const fs = require('fs');
const fetch = require('node-fetch');

async function download() {

  for(let i = 0;i< 5000;i++){
    let url = `https://database.turtle-wow.org/images/maps/enus/zoom/${i}.jpg`;
    try{
      const response = await fetch(url);
      if(response.status==200){
        const buffer = await response.buffer();
        fs.writeFile(`./data/maps/${i}.jpg`, buffer, () => 
        console.log('finished downloading! '+i ));
      }
    }catch(e){
      console.log(e);
    }
  }
}

download();