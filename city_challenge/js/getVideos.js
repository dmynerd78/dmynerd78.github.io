// https://console.developers.google.com/project/youtube-php-1003/apiui/credential

videoObject = {};
$.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=PLpsRQ_00A2YQTabJg3IoLBW62HTnXCH8S&key=AIzaSyB6wccXxgBeO6VJ5EHV-zTrBvWTKZE8H0k", function(data) {
$.each(data.items, function(i, val) {
        i += 1;
        videoObject[i] = {"title":val.snippet.title, "id":val.snippet.resourceId.videoId};
        console.log(videoObject[i]);
 });
});

var appendVideos = function() {
    for(i = 1; i <= 3; i++) {
        document.getElementById(i).innerHTML = "<a href='https://www.youtube.com/watch?v=" + (videoObject[i]["id"]) + " ' target='_blank' title='" + videoObject[i]["title"]  +  "'>" + 
                                                    "<img class='thumbnail' src='https://i.ytimg.com/vi/"+ (videoObject[i]["id"]) + "/mqdefault.jpg' />" +
                                                "</a>";
    }
};

var detectVideos = function() {
    if(document.getElementById(1).innerHTML === "") {
        console.log("Unable to load vidoes reloading.")
        //location.reload();
    }
};

setTimeout(function(){
    appendVideos();
    detectVideos();
}, 1000);