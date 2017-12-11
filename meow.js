import $ from "jquery";
import "./style.css";

$(document).ready(function() {
  console.log("READY!!! SET GO!!!");
  console.log($);
  //Get button element
  var searchGiphyButton = document.getElementById("getMeow");
  var giphyImage = document.getElementById("rando-gliph-img");
  var notYetText = document.getElementById("nothing-yet");
  var searchInput = document.getElementById("textInput");

  searchGiphyButton.addEventListener("click", function() {
    //go get kitten gliph's
    console.log("Meow Click Click!!!");
    fetchGiphy(searchInput.value);
  });

  function fetchGiphy(str) {
    var xhr = new XMLHttpRequest();
    //open
    xhr.open(
      "GET",
      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + str
    );

    xhr.onload = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        var payload = JSON.parse(xhr.response);
        console.log(payload.data.image_url);
        giphyImage.src = payload.data.image_url;
        notYetText.setAttribute("class", "nothing-yet-hidden");
      }
    };

    xhr.send();
  }
});
