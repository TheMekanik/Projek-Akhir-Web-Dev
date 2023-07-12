// Toggle Class active untuk hamburger menu franchise
const navbarNavF = document.querySelector(".navbar-nav-f");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNavF.classList.toggle("active");
  e.preventDefault();
};

// Toggle Class Active untuk search form pada page franchise
const searchFormF = document.querySelector(".search-form-f");
const searchBoxF = document.querySelector("#search-box-f");

document.querySelector("#search-button-f").onclick = (e) => {
  searchFormF.classList.toggle("active-f");
  searchBoxF.focus();
  e.preventDefault();
};

// Klik Di Luar Elemen
const sbf = document.querySelector("#search-button-f");
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNavF.contains(e.target))
    navbarNavF.classList.remove("active");

  if (!sbf.contains(e.target) && !searchFormF.contains(e.target))
    searchFormF.classList.remove("active-f");
});

// Popup Kirim Pengajuan
function myPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

document.querySelector(".btn").onclick = (e) => {
  e.preventDefault();
};
