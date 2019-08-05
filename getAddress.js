function areaAcknowledge(pickuplat, pickuplong, dropofflat, dropofflong, value){
        // adding locations of map
        var mapdivname = "map" + value.gigId;
        var mapdiv = document.getElementById(mapdivname);
        // mapdiv.innerHTML += '<div id="map-locations" style="background-color: red;">'+ pickuplat +'</div>';

          $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+pickuplat+','+pickuplong+'&sensor=true&key=AIzaSyCiYQPvG8W9pYd9HzoP4aypwdpqHFQzXpo',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // debugger;
                console.log(data);
            },
            error: function (error, message, request) {
                console.log(error);
            }
        });
    }
