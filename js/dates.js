const date = new Date();
const year = date.getFullYear();

document.getElementById("currentyear").textContent = "©" + year + "|George Ogidi|Nairobi, Kenya.";
document.getElementById("lastupdated").textContent = "Last Updated: " + date;