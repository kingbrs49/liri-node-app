require("dotenv").config();

// Variables
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var fs = require('fs');
var userChoice = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

inputThis(userChoice, userInput);

function inputThis(userChoice, userInput) {
    switch (userChoice) {
        case 'spotify-this-song':
            spotifyThisSong(userInput);
            break;
        case 'movie-this':
            movieThis(userInput);
            break;
        case 'concert-this':
            concertThis(userInput);
            break;
        case 'do-what-it-says':
            doWhatItSays(userInput);
            break;
    }
}

function spotifyThisSong(userInput) {
    if (!userInput) {
        userInput = "The Sign";
    };
    spotify.search({
        type: "track",
        query: userInput
    }, function (err, data) {
        if (err) {
            console.log("Error occured: " + err);
        };
        var songInfo = data.tracks.items;
        for (var i = 0; i < songInfo.length; i++) {
            var trackName = songInfo[i].name;
            var trackAlbum = songInfo[i].album;
            // console.log(trackAlbum.name)
            var trackPreview = songInfo[i].preview_url;
            var trackArtists = trackAlbum.artists;
            for (var j = 0; j < trackArtists.length; j++) {
                console.log("Artist: " + trackArtists[j].name)
                console.log("Song Name: " + trackName)
                console.log("Song Preview: " + trackPreview)
                console.log("Album: " + trackAlbum.name)
                console.log("----------------")
            }
        };
    });
}

function movieThis(userInput) {
    //var axios = require("axios");
    if (!userInput) {
        userInput = "Mr. Nobody";
    }
    var movieQueryURL = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&tomatoes=true&apikey=trilogy";

    axios.get(movieQueryURL).then(
        (response) => {
            console.log("The movie you're looking for is " + response.data.Title + ".");
            console.log("This movie came out in " + response.data.Year + ".")
            console.log("This movie's rating is: " + response.data.imdbRating);
            console.log("Rotten Tomatoes rated this movie at a " + response.data.tomatoRating + " out of 10.");
            console.log("This movie was produced in " + response.data.Country + ".");
            console.log("This movie is in " + response.data.Language + ".");
            console.log("This movie's plot is as follows: " + response.data.Plot);
            console.log("This movie stars " + response.data.Actors + ".")
        });
}

function concertThis(userInput) {
    //var axios = require("axios");
    var concertQueryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"

    axios.get(concertQueryURL).then(
        (response) => {
            console.log("Venue Name: " + response.data[0].venue.name + ".");
            console.log("Venue City: " + response.data[0].venue.city + ".");
            console.log("Concert Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
        }
    )
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error)
        }
        var output = data.split(",");
        for (var i = 0; i < output.length; i++) {
            console.log(output[i]);
            inputThis(userChoice, output[1])
        }
    })
}
