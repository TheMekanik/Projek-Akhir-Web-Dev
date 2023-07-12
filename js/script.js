// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
  // e.preventDefault(); --> agar saat klik search bar halaman tidak terscroll
};

// Toggle Class Active untuk shopping cart
const shoppingCartButton = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCartButton.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const scb = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");

  if (!sb.contains(e.target) && !searchForm.contains(e.target))
    searchForm.classList.remove("active");

  if (!scb.contains(e.target) && !shoppingCartButton.contains(e.target))
    shoppingCartButton.classList.remove("active");
});

// Modal Box
// Brazilian Coffee
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

// Robusta Coffee
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButton2 = document.querySelector(".item-detail-button2");

// Luwak Coffee
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButton3 = document.querySelector(".item-detail-button3");

// Excelsa Coffee
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButton4 = document.querySelector(".item-detail-button4");

// Display
// Brazilian Coffee
itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// Robusta Coffee
itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};

// Luwak Coffee
itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
};

// Excelsa Coffee
itemDetailButton4.onclick = (e) => {
  itemDetailModal4.style.display = "flex";
  e.preventDefault();
};

// Klik Tombol Close
// Brazilian Coffee
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Robusta Coffee
document.querySelector(".modal .close-icon2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

// Luwak Coffee
document.querySelector(".modal .close-icon3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

// Excelsa Coffee
document.querySelector(".modal .close-icon4").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};

// Klik Di Luar modal-container
// Brazilian Coffee
const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Robusta Coffee
const modal2 = document.querySelector("#item-detail-modal2");
window.onclick = (e) => {
  if (e.target === modal2) {
    modal2.style.display = "none";
  }
};

// Luwak Coffee
const modal3 = document.querySelector("#item-detail-modal3");
window.onclick = (e) => {
  if (e.target === modal3) {
    modal3.style.display = "none";
  }
};

// Excelsa Coffee
const modal4 = document.querySelector("#item-detail-modal4");
window.onclick = (e) => {
  if (e.target === modal4) {
    modal4.style.display = "none";
  }
};

// Query selector hanya menjalankan satu item
// yang pertama kali ditemukan saja

// Popup item shop button
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const pp = document.querySelectorAll("#popup");
const myPopup = document.querySelectorAll("#myPopup");

// Klik diluar shopping-cart
document.addEventListener("click", function (e) {
  if (!pp.contains(e.target) && !myPopup.contains(e.target))
    pp.classList.remove("show");
});

// Tombol Kirim Pesan
document.querySelector(".btn").onclick = (e) => {
  e.preventDefault();
};
