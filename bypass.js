const cheerio = require('cheerio'); // use module cheerio

  
async function bypass(url) {  //create a function with variable url
  if (url.startsWith('https://paste-drop.com/')) { // if url starts with pastedrop then
    try {
      await fetch(url) //fetch url maybe same with requests in python
        .then(r => r.text()) //acess to text
        .then(data => { //acess to data
          const $ = cheerio.load(data); //use module cheerio to load
          const text = $('#content').text(); //use module cheerio to convert element that has id content to text
          console.log(text); //print it
        });
    } catch (error) { //if code has error then
      console.error('Error To Bypass :', error); //print error
    }
  } else { //if url does not start with pastedrop
    console.log("please enter valid url") 
  }
}

bypass("YOUR PASTEDROP URL GOES HERE")
