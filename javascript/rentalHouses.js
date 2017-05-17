function rentalHouses(){
  initMap();
  var xmlhttp = new XMLHttpRequest();
  var url = "https://data.cityofchicago.org/api/views/s6ha-ppgi/rows.json?accessType=DOWNLOAD";
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var array = xmlhttp.responseText;
      var texto = myArray;
      var json = JSON.parse(text)
      var cant = json.data.lenght;
      var ubication = "";
    for (var i = 0; i < cant; i++) {
      var lat = Number(json.data[i][19])
      var long = Number(json.data[i][20])
      recorrido = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(41.8708, -87.6505), new google.maps.LatLng(lat, long));
      if (recorrido<3000) {
        ubication = JSON.parse('{ "lat":'+ lat +', "lng":'+ long +' }');
        var marker = new google.maps.Marker({
          position: ubication,
          map: map,
          title: json.data[i][11],
	});
      }
    }
  })
}
