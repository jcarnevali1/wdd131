const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class"currentyear">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCount").textContent = reviewCount;