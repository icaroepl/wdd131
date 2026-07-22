document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("windchill").textContent = calculateWindChill(10, 4.8) + " ℃";

function calculateWindChill(temperature,windSpeed){   
    windChill = 13.12 + 0.6215*temperature-11.37*(windSpeed** 0.16)+0.3965*temperature*(windSpeed** 0.16)
    return windChill.toFixed(1)
}
