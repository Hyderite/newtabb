// Variables and Constants

const dropdown = document.querySelector("#select-search");
const option = document.querySelector("#option");
const check = document.querySelector("#check-selection");
const spError = document.querySelector("#sp-error");
const query = document.querySelector("#search-query");
const search = document.querySelector("#search-btn");
const url = document.querySelector("#url-query");
const urlBtn = document.querySelector("#url-btn");
const searchLogo = document.querySelector("#engine-logos");

// Change search engines

check.onclick = function() {selectSearch()};

function selectSearch() {
  if (dropdown.value == "google") {
    searchLogo.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    searchLogo.style.height = "92px";
    var searchEngine = "https://www.google.com/search?q="
  } else if (dropdown.value == "sp") {
    searchLogo.src = "https://www.startpage.com/sp/cdn/images/startpage-logo-new.svg";
    searchLogo.style.height = "65px";
    spError.style.display = "block";
  } else if (dropdown.value == "bing") {
    searchLogo.src = "https://searchengineland.com/figz/wp-content/seloads/2016/01/bing-new-logo-1920.jpg";
    searchLogo.style.height = "115px";
    var searchEngine = "https://www.bing.com/search?q="
  } else if (dropdown.value == "brave") {
    searchLogo.src = "https://cdn.search.brave.com/serp/v1/static/brand/03de8de0ca27ecad61cbaa32347e7e0059e2a853ee7f4fe57d1fccfa67a30c28-brave-logo-home-dark-beta.svg";
    searchLogo.style.height = "92px";
    var searchEngine = "https://search.brave.com/search?q="
  } else if (dropdown.value == "yahoo") {
    searchLogo.src = "https://www.yahooinc.com/assets/images/610c8550409cef4e50e34796-yahoo-logo.png";
    searchLogo.style.height = "80px";
    var searchEngine = "https://search.yahoo.com/search?q="
  } else if (dropdown.value == "baidu") {
    searchLogo.src = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";
    searchLogo.style.height = "125px";
    var searchEngine = "https://www.baidu.com/s?ie=utf-8&wd="
  } else if (dropdown.value == "yandex") {
    searchLogo.src = "https://yastatic.net/s3/home-static/_/n/M/pFHvdMV7_0kRsAw7bKuFiP0mY.svg";
    searchLogo.style.height = "105px";
    var searchEngine = "https://yandex.com/search/?oprnd=2022035458&text=";
  } else if (dropdown.value == "ddg") {
    searchLogo.src = "https://duckduckgo.com/assets/logo_homepage.normal.v108.svg";
    searchLogo.style.width = "272px";
    searchLogo.style.height = "125px";
    var searchEngine = "https://duckduckgo.com/?q=";
  } else if (dropdown.value == "ecosia") {
    searchLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ecosia_logo.svg/1200px-Ecosia_logo.svg.png";
    searchLogo.style.height = "185px";
    var searchEngine = "https://www.ecosia.org/search?q=";
  };
  search.onclick = function() {searchQuery()};

function searchQuery() {
    var encodedQuery = encodeURIComponent(query.value);
    window.open(searchEngine + encodedQuery, "_self");
  };
};

query.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        search.click();
    };
});

// Enter URL and go to website

urlBtn.onclick = function() {
  if (url.value.includes("https://")) {
    window.open(url.value, "_self");
  } else if (url.value.includes("http://")) {
    window.open(url.value, "_self");
  } else if (url.value.includes("chrome://")) {
    window.alert("Local sources are not supported.");
    console.log("%c Local sources are not supported. Error: chrome1", "background-color: #4d0000; color: #b00000");
  } else if (url.value.includes("edge://")) {
    window.alert("Local sources are not supported.");
    console.log("%c Local sources are not supported. Error: edge1", "background-color: #4d0000; color: #b00000");
  } else {
    window.open("https://" + url.value, "_self");
  };
};

url.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        urlBtn.click();
    };
});

// Close Startpage error

document.querySelector("#close-sp-error").onclick = function() {
  spError.style.display = "none";
};
