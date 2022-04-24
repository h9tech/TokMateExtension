const LOCAL_STORAGE_API_KEY = 'apikey';
let apiKey = '';

document.getElementById('btnSetApiKey').addEventListener('click', saveApiKey);

chrome.storage.sync.get(LOCAL_STORAGE_API_KEY, (result) => {
    apiKey = result[LOCAL_STORAGE_API_KEY] || '';
    document.getElementById('apikey').value = apiKey;
    console.log('Api key loaded:' + apiKey);
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

function saveApiKey() {
    const displayMessage = document.getElementById('display_message');
    const apiKey = document.getElementById('apikey').value;
    const jsonFile = {};
    jsonFile[LOCAL_STORAGE_API_KEY] = apiKey;
    chrome.storage.sync.set(jsonFile);
    displayMessage.style.display = 'block';
    setTimeout(() => {
      displayMessage.style.display = 'none';
    }, 5000);
    console.log(`Token updated: ${JSON.stringify(jsonFile)}`);
}

