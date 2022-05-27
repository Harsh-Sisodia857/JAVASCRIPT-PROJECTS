function fetchImage(){
    var createRequest = new XMLHttpRequest();
    createRequest.open("GET","https://dog.ceo/api/breeds/image/random",true)
    createRequest.send()
    createRequest.onload = function(){
        console.log(createRequest.response)
       var JsonResponse = JSON.parse(createRequest.response)
       var ImageUrl = JsonResponse.message
       $(".dog-image").attr("src",ImageUrl);
    }
}


$(document).ready(function(){
    $("#fetch-dog-image").click(fetchImage)
})