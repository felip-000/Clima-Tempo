function confirmar(){
    const appid = "23c97a3560cd85ae7dd240c47bce2fdb";
    const q = document.getElementById("cidade").value;
    const units = "metric";
    const lang = "pt_br";

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${q}&units=${units}&appid=${appid}&lang=${lang}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const latitude = data[0].lat;        
        const longitude = data[0].lon;
        document.getElementById("lati").textContent = latitude.toFixed(2);
        console.log("Latitude: " + latitude.toFixed(2));
        document.getElementById("long").textContent = longitude.toFixed(2);
        console.log("Longitude: " + longitude.toFixed(2));
    

    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}&lang${lang}`;

    fetch(url2)
    .then(res => res.json())
    .then(data => {
        const sensacao = data.main.feels_like;
        const descricao = data.weather[0].description;
        const celsius = sensacao - 273.15
        document.getElementById("sens").textContent = celsius.toFixed(0);
        console.log("Sensação térmica: " + celsius.toFixed(0) + "°C");
        document.getElementById("desc").textContent = descricao;
        console.log("Descrição: " + descricao);
    })
})
}