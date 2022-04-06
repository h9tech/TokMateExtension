function tokmateBot(url){
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
       tokmateBot(videoUrl)
   }
})