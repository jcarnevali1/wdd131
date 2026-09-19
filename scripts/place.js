const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class"currentyear">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;


const temperature = 26;
const windSpeed = 6;

function calculateWindChill(temperature, windSpeed)
{
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed * 0.16 + 0.3965 * temperature * windSpeed * 0.16;
}

const windChill = document.querySelector("#windchill");

if(temperature <= 10 && windSpeed > 4.8)
{
    windChill.textContent = "${calculateWindChill(temperature,windSpeed).toFixed(1)} °C";
}

else
{
    windChill.textContent = "N/A";
}