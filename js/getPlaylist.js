function getPlaylist(playlistID) {
    blah = [];

    $.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playlistID + "&key=AIzaSyB6wccXxgBeO6VJ5EHV-zTrBvWTKZE8H0k", function(data) {
        $.each(data.items, function(i, val) {
            blah[i] = {"title":val.snippet.title, "url":"https://www.youtube.com/watch?v="+val.snippet.resourceId.videoId};
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "{'title': '" + blah[i]["title"] + "', 'url': '" + blah[i]["url"] + "'},<br>";
     });

    });

    $.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken=CDIQAA&playlistId=" + playlistID + "&key=AIzaSyB6wccXxgBeO6VJ5EHV-zTrBvWTKZE8H0k", function(data) {
        $.each(data.items, function(i, val) {
            i += blah.length;
            blah[i] = {"title":val.snippet.title, "url":"https://www.youtube.com/watch?v="+val.snippet.resourceId.videoId};
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "{'title': '" + blah[i]["title"] + "', 'url': '" + blah[i]["url"] + "'},<br>";
     });
    });

    return blah;

}
