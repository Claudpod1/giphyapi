var topics = ["Swimming", "Hiking", "Mountains", "River", "Kayaking", "Camping", "Trails", "Disk Golf", "Paddle Boarding", "Fishing", "Skiing"];

// for (var i = 0; i <topics.length; i++){
//     console.log(i=);
//     console.log(topics[i]);
// }
var queryURL = "https://api.giphy.com/v1/gifs/random" 
      queryURL +="?api_key=KsHx01jSsGL9FW02U0n28y1XP2eCXcLd&tag=outdoors"


      // rendering one button for each outdoor activity in the topic array 
function renderButtons() {
    $("#outdoor-buttons").empty();

    topics.forEach(function(topic) {
        // creating button
        var button = $("<button>");
        button.text(topic);
        button.attr("data-title", topic);

        // putting the button on the webpage
        $("#outdoor-buttons").append(button);

    });

}

$("#add-outdoor").on("click", function(event) {
    event.preventDefault();
    
     
    var outdoorAct = $("#outdoor-input").val().trim();
    topics.push(outdoorAct);
    renderButtons();
    $("#outdoor-input").val("");
});

/// ~CALL THE FUNCTIONS~///
renderButtons();
