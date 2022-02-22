var version = "1.0.5";
console.log("NewTabb v" + version);

// Variables and Constants

const logo = document.querySelector("#logo");
const help = document.querySelector("#help");

// Redirect to help page on click

help.onclick = function() {redirHelp()};

function redirHelp() {
  window.open("/help/", "_self");
};

// Change Logo on hover

logo.onmouseover = function() {fullImg()};
logo.onmouseout = function() {minImg()};

function fullImg() {
  logo.src = "/img/newtabb-full.png";
  logo.style.width = "95px";
};

function minImg() {
  logo.src = "/img/newtabb.png";
  logo.style.width = "30px";
};

// Redirect to homepage when logo is clicked

logo.onclick = function() {redirHome()};

function redirHome() {
  window.open("/", "_self");
};

// Close Message

window.onload = function() {document.querySelector("#close-msg").onclick = function() {closeMsg()};};

function closeMsg() {
  document.querySelector("#msg").style.display = "none";
};
