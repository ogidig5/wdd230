const d = new Date();
const year = d.getFullYear();

document.getElementById("currentyear").textContent = "©" + d.getFullYear() + "|George Ogidi|Nairobi, Kenya.";
document.getElementById("lastupdated").textContent = "Last Updated: " + document.lastModified;