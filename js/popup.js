const downloadToggler = document.getElementById("downloadToggler");
const downloadArea = document.getElementById("download-area");

downloadArea.style.display = "none";

downloadToggler.addEventListener("change", (e) => {
  if (e.target.checked) {
    downloadArea.style.display = "block";

    return;
  }

  downloadArea.style.display = "none";
});

const telegramToggler = document.getElementById("telegramToggler");
const telegramArea = document.getElementById("telegram-area");

telegramArea.style.display = "none";

telegramToggler.addEventListener("change", (a) => {
  if (a.target.checked) {
    telegramArea.style.display = "block";
  
    return;
  }

  telegramArea.style.display = "none";
});
 

