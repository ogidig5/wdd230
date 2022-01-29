function toggleMenu() {
  /*console.log("It worked!");*/
  document.getElementById('primaryNav').classList.toggle("open");
  document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

const date = new Date();
const shortDate = date
document.getElementById("lastupdated").textContent = date;
document.getElementById("lastUpdated").textContent = shortDate;
document.getElementById("LastUpdated").textContent = shortDate;