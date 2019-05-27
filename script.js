var topics = ["Swimming", "Hiking", "Mountains", "River", "Kayaking", "Camping", "Trails", "Disk Golf", "Paddle Boarding", "Fishing", "Skiing"];
// rendering one button for each outdoor activity in the topic array 
function renderButtons() {
    $("#outdoor-buttons").empty();

    topics.forEach(function (topic) {
        // creating button
        var button = $("<button>");
        button.text(topic);
        button.attr("data-title", topic);

        // putting the button on the webpage
        $("#outdoor-buttons").append(button);

    });

}

$("#add-outdoor").on("click", function (event) {
    event.preventDefault();


    var outdoorAct = $("#outdoor-input").val().trim();
    topics.push(outdoorAct);
    renderButtons();
    $("#outdoor-input").val("");
});

$("add-outdoor").on("submit", function (event) {
    event.preventDefault();
    var topic = $("#outdoor-input").val().trim();
    topics.push(topic);
    renderButtons();
    $("#outdoor-input").val("");
});

/// ~CALL THE render button FUNCTION~///
renderButtons();

// event delegation syntax 
$("#outdoor-buttons").on("click", "button", function () {

    var searchTerm = $(this).attr("data-title");

    var queryURL = "https://api.giphy.com/v1/gifs/search"
    queryURL += "?api_key=KsHx01jSsGL9FW02U0n28y1XP2eCXcLd&q=" + searchTerm + "&limit=10";

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then (function (response) {
            console.log(response)

                for (var i = 0; i < response.data.length; i++) {
                    var stillImage = response.data[i].images.fixed_width_still.url;
                    var animatedImage = response.data[i].images.fixed_width.url;
                    var mainURL = stillImage;
                    var gifImage = $("<img>").attr("src", mainURL).attr("data-still", stillImage).attr("data-animate", animatedImage).attr("data-state", "still").addClass("gif");
                    var rating = response.data[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    $(".gifs").prepend(p, gifImage);
                }
                //stops and starts gifs with on.click event
                $(".gif").on("click", function () {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");

            }
      
    });
});

});