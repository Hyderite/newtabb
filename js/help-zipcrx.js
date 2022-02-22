const dropdownZipCrx = document.querySelector("#dropdown-zipcrx");
const btnZipCrx = document.querySelector("#select-zipcrx");
const zipVersion = document.querySelector("#zip-version");
const crxVersion = document.querySelector("#crx-version");

// ZIP or CRX

btnZipCrx.onclick = function() {chooseZipCrx()};

function chooseZipCrx() {
  if (dropdownZipCrx.value == "zip") {
    zipVersion.style.display = "block";
    crxVersion.style.display = "none";
  } else if (dropdownZipCrx.value == "crx") {
    crxVersion.style.display = "block";
    zipVersion.style.display = "none";
  };
};