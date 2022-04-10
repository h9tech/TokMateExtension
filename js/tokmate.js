function tokmateBot(url, apiKey){
    fetch("https://hemantapokharel.com.np/tokmateApi/", {
        method: 'POST',
        body: JSON.stringify({
            url,
            "token": apiKey
        })
    })
    .catch(err => {
        console.log(err);
    })
};

document.addEventListener('copy', (e) => {
    const videoUrl = e.target.value

   if( confirm('Do you want to download this video?')){
    chrome.storage.sync.get('apikey', (result) => {
        let apiKey = result['apikey'] || '';
        tokmateBot(videoUrl, apiKey)
    });
   }
})

