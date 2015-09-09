var getVideos = function() {
    videoObject = {};
    $.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=9&playlistId=UU5FioLwX2ZgjPbpB84FCf-Q&key=AIzaSyB6wccXxgBeO6VJ5EHV-zTrBvWTKZE8H0k", function(data) {
    $.each(data.items, function(i,val) {
     videoObject[i] = [val.snippet.title, val.snippet.resourceId.videoId];
     console.log(videoObject[i]);
     });
    });
    
    setTimeout(function(){
        for(i = 0; i < 10; i++) {
            document.getElementById(i).innerHTML = "<a href='https://www.youtube.com/watch?v=" + (videoObject[i])[1] +  " ' target='_blank'>" + "<img class='thumbnail' src='https://i.ytimg.com/vi/"+ (videoObject[i])[1] + "/mqdefault.jpg' />"  + "</a>";
        }
    }, 1000);
    
    if(window.canRunAds === undefined) {
    	document.getElementById("twitter").innerHTML = "<p class='warning'>You currently have an ad blocker enabled which disables some of the links on this site :(<br /><br />There are <em>zero</em> on this site so you can disable it if you chose to</p>";
    }
};