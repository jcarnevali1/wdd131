const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class"currentyear">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const menuButton = document.querySelector('#menu')
const nav = document.querySelector('.menu-navigation')
const title = document.querySelector('header span')

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
    title.classList.toggle('hide');
})