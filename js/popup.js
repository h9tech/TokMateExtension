// https://github.com/tkrisztian95/netflix-imdb-chrome-extension

const LOCAL_STORAGE_API_KEY = 'apikey';
let apiKey = '';

chrome.storage.sync.get(LOCAL_STORAGE_API_KEY, (result) => {

    apiKey = result[LOCAL_STORAGE_API_KEY];
    console.log('Api key loaded:' + apiKey);
});

function saveApiKey() {
    const apiKey = document.getElementById('apikey').value;
    const jsonFile = {};
    jsonFile[LOCAL_STORAGE_API_KEY] = apiKey;
    chrome.storage.sync.set(jsonFile);
    document.getElementById('display_message').style.display = '';
    console.log(`Token updated: ${JSON.stringify(jsonFile)}`);
}

document.getElementById('btnSetApiKey').addEventListener('click', saveApiKey);
chrome.storage.sync.get(LOCAL_STORAGE_API_KEY, (result) => {
    document.getElementById('apikey').value = result[LOCAL_STORAGE_API_KEY];
});

window.addEventListener('click', (e) => {
    if (e.target.href !== undefined) {
        chrome.tabs.create({ url: e.target.href });
    }
});

chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let key in changes) {
        const storageChange = changes[key];
        if (key === LOCAL_STORAGE_API_KEY) {
            console.log('Token updated');
            apiKey = storageChange.newValue;
        }
        console.log(
            `Storage key "${key}" in namespace "${namespace}" changed. 
            Old value was "${storageChange.oldValue}", new value is "${storageChange.newValue}".`
        );
    }
});