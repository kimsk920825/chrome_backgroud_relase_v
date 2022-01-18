function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}
function onGeoError() {
  alert("Can't find your location");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
