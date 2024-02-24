// Define the functions you want to export
export function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export function promptPassword(callback) {
  const password = prompt("Please enter the password:");
  if (password === "yourPassword") { // Replace "yourPassword" with your actual password
    callback();
  } else {
    alert("Incorrect password!");
  }
}

export function loadUI() {
  const sidePanel = document.createElement("div");
  sidePanel.innerHTML = "<h2>Welcome!</h2>"; // Customize with your desired UI
  sidePanel.style.cssText = "position:fixed;top:0;right:0;width:300px;height:100%;background-color:white;z-index:1000;";
  document.body.appendChild(sidePanel);
}

// If you need to automatically run some code when the module is imported, you can still do so.
// For instance, if you want to automatically prompt for a password if a specific key is found in the URL:
export function init() {
  const key = getUrlParameter("key");
  if (key === "specialKey") { // Replace "specialKey" with your specific key
    promptPassword(loadUI);
  }
}
