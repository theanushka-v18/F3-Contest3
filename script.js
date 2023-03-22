// get all the elemlents
const getLocBtn = document.querySelector("#getLoc");
const removeLocBtn = document.querySelector("#removeLoc");
const mapDiv = document.querySelector("#map");

// get location function 
function getLocation() {
    if (navigator.geolocation) { // it checks if browser supports geolocation or not
        navigator.geolocation.getCurrentPosition(showPosition); // get current position and passing callback function
    } else {
        alert("Geolocation is not available"); // shows alert if browser does not support geolocation
    }
    
}

// showPosition function
function showPosition(position) {
    localStorage.setItem("lat", position.coords.latitude); // get latitude
    localStorage.setItem("long", position.coords.longitude); // get longitude
    if(localStorage.getItem("lat") != null && localStorage.getItem("long") != null) { // checks if localStorage contains lat and long key or not
        getLocBtn.disabled = true; // disable the get location button
        getLocBtn.style.pointerEvents = "none";
    }
    mapDiv.innerHTML = `<iframe src="https://maps.google.com/maps?q=${localStorage.getItem("lat")}, ${localStorage.getItem("long")}&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>`; // render the map
}

// remove location function
function removeLocation() {
    getLocBtn.disabled = false; // enable get location button
    getLocBtn.style.pointerEvents = "auto";
    localStorage.removeItem("lat"); // remove lat key from localStorage
    localStorage.removeItem("long"); // remove long key from localStorage
    mapDiv.innerHTML = ""; // remove the map 
}

// add the event listeners on both the buttons
getLocBtn.addEventListener("click", getLocation);
removeLocBtn.addEventListener("click", removeLocation);