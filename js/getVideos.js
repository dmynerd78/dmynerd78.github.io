// https://console.developers.google.com/project/youtube-php-1003/apiui/credential

videoObject = {};
$.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=9&playlistId=UU5FioLwX2ZgjPbpB84FCf-Q&key=AIzaSyB6wccXxgBeO6VJ5EHV-zTrBvWTKZE8H0k", function(data) {
    $.each(data.items, function(i, val) {
            i += 1;
            videoObject[i] = [val.snippet.title, val.snippet.resourceId.videoId];
            console.log(videoObject[i]);
     });
});

var appendVideos = function() {
    for(i = 1; i <= 9; i++) {
        document.getElementById(i).innerHTML = "<a href='https://www.youtube.com/watch?v=" +
                                                (videoObject[i])[1] +
                                                " ' target='_blank'><img class='thumbnail' src='https://i.ytimg.com/vi/"+
                                                (videoObject[i])[1] +
                                                "/mqdefault.jpg' />"  + "</a>";
    }
};

var detectVideos = function() {
    if(document.getElementById(1).innerHTML === "") {
        console.log("Unable to load vidoes reloading.")
        location.reload();
    }
};
