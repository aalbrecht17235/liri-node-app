require("dotenv").config();


var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var fs = require('fs');
var command = process.argv[2];
var joined = [];
var keys = require('./keys');
var spotify = new Spotify(keys.spotify);

for (var i = 3; i < process.argv.length; i++) {
    joined.push(process.argv[i]);
}


if (command === "spotify-this-song") {
    var song = joined.join('+');
    // If no song is entered, default to 'The Sign' by Ace of Base
    if (!song) {
        song = "The+Sign+Ace"
        console.log(song)
        spotify.search({
            type: 'track',
            query: song,
            limit: 1
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("\n-- Song Info --" +
                "\n* Artist: " + data.tracks.items[0].artists[0].name + "\n" +
                "* Song: " + data.tracks.items[0].name + "\n" +
                "* Album: " + data.tracks.items[0].album.name + "\n" +
                "* Song Preview: " + data.tracks.items[0].preview_url +
                "\n------------------\n"
            );

        });
        // if song is given, run spotify query for that song
    } else {
        spotify.search({
            type: 'track',
            query: song,
            limit: 1
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("\n-- Song Info --" +
                "\n* Artist: " + data.tracks.items[0].artists[0].name + "\n" +
                "* Song: " + data.tracks.items[0].name + "\n" +
                "* Album: " + data.tracks.items[0].album.name + "\n" +
                "* Song Preview: " + data.tracks.items[0].preview_url +
                "\n------------------\n"
            );

        });
    }
}

if (command === "movie-this") {
    var movie = joined.join('+')
    if (!movie) {
        movie = "Mr.+Nobody"
        var omdbUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        axios.get(omdbUrl).then(
            function (response) {
                console.log("\n-- Movie Info --" +
                    "\n* Title: " + response.data.Title + "\n" +
                    "* Released: " + response.data.Year + "\n" +
                    "* IMDB Rating: " + response.data.imdbRating + "\n" +
                    "* Country: " + response.data.Country + "\n" +
                    "* Language: " + response.data.Language + "\n" +
                    "* Plot: " + response.data.Plot + "\n" +
                    "* Actors: " + response.data.Actors +
                    "\n------------------\n"
                )
            }
        )
    } else {
        var omdbUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        axios.get(omdbUrl).then(
            function (response) {
                console.log("\n-- Movie Info --" +
                    "\n* Title: " + response.data.Title + "\n" +
                    "* Released: " + response.data.Year + "\n" +
                    "* IMDB Rating: " + response.data.imdbRating + "\n" +
                    "* Country: " + response.data.Country + "\n" +
                    "* Language: " + response.data.Language + "\n" +
                    "* Plot: " + response.data.Plot + "\n" +
                    "* Actors: " + response.data.Actors +
                    "\n------------------\n"
                )
            }
        )}



    };

    if (command === "concert-this") {
        var artist = joined.join('+')
        var concertUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(concertUrl).then(function (response) {
            if (response.data == 0) {
                console.log("We could find any upcoming concerts for '" + artist + "'. Please search again.");
            } else {
                console.log("\n-- Concert Info --" +
                    "\n* Venue: " + response.data[0].venue.name + "\n" +
                    "* Venue location: " + response.data[0].venue.city + ", " + response.data[0].venue.country + "\n" +
                    "* Concert Date: " + moment(response.data[0].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A') +
                    "\n------------------\n");
            }


        });
    };

    if (command === "readFile") {

        var content;

        fs.readFile('random.txt', function read(err, data) {
            if (err) {
                throw err;
            }
            content = data.toString().trim();

            spotify.search({
                type: 'track',
                query: content,
                limit: 1
            }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                console.log("\n-- Song Info --" +
                    "\n* Artist: " + data.tracks.items[0].artists[0].name + "\n" +
                    "* Song: " + data.tracks.items[0].name + "\n" +
                    "* Album: " + data.tracks.items[0].album.name + "\n" +
                    "* Song Preview: " + data.tracks.items[0].preview_url +
                    "\n------------------\n"
                );

            });

        });


    }

    fs.appendFile("log.txt", command + " " + joined.join(' ') +
        "\n",
        function (err) {

            if (err) {
                return console.log("error")
            }

        })