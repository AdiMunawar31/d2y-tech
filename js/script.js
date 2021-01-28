$(document).ready(function () {

    const url = "https://api.wheretheiss.at/v1/satellites/25544";

    let lat = '';
    let lon = '';
    let alt = '';
    let ftp = '';
    let slt = '';
    let sln = '';
    async function getISS() {
        const response = await fetch(url);
        const data = await response.json();
        let { latitude, longitude, altitude, footprint, solar_lat, solar_lon } = data;
        console.log(data);

        lat = `
        ${latitude >= 0 ? '<h3 style="color: green"> Lat : ' + latitude.toFixed(4) + '</h3>' : '<h3 style="color: red"> Lat : ' + latitude.toFixed(4) + '</h3>'}
        `;
        lon = `
        ${longitude >= 0 ? '<h3 style="color: green"> Long : ' + longitude.toFixed(4) + '</h3>' : '<h3 style="color: red"> Long : ' + longitude.toFixed(4) + '</h3>'}
        `;
        alt = `
        ${altitude >= 0 ? '<h3 style="color: green"> Alt : ' + altitude.toFixed(4) + '</h3>' : '<h3 style="color: red"> Alt : ' + altitude.toFixed(4) + '</h3>'}
        `;
        ftp = `
        ${footprint >= 0 ? '<h3 style="color: green"> Ftp : ' + footprint.toFixed(4) + '</h3>' : '<h3 style="color: red"> Ftp : ' + footprint.toFixed(4) + '</h3>'}
        `;
        slt = `
        ${solar_lat >= 0 ? '<h3 style="color: green"> Slt : ' + solar_lat.toFixed(4) + '</h3>' : '<h3 style="color: red"> Slt : ' + solar_lat.toFixed(4) + '</h3>'}
        `;
        sln = `
        ${solar_lon >= 0 ? '<h3 style="color: green"> Sln : ' + solar_lon.toFixed(4) + '</h3>' : '<h3 style="color: red"> Sln : ' + solar_lon.toFixed(4) + '</h3>'}
        `;

        document.getElementById('lat').innerHTML = lat;
        document.getElementById('lon').innerHTML = lon;
        document.getElementById('alt').innerHTML = alt;
        document.getElementById('ftp').innerHTML = ftp;
        document.getElementById('slt').innerHTML = slt;
        document.getElementById('sln').innerHTML = sln;
    }


    getISS();
    setInterval(getISS, 1000);


})