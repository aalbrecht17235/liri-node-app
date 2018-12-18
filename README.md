# Liri Bot
Similar to Siri, the Liri bot will take in commands and provide responses. 

## Description

Liri searches the following APIs: Spotify, OMDB, or Bands In Town based on which command it receives. The three commands that Liri will accept are 'spotify-this-song', 'movie-this', and 'concert-this'. After taking in the command as well as either an artist, song, or movie, Liri will output to the terminal the first result of the queried API.

Spotify search
------
### node liri.js spotify-this-song <'song name here'>

This will show the following information about the song in your terminal/bash window

Artist(s)

  * The song's name

  * A preview link of the song from Spotify

  * The album that the song is from
  
  ** If no song is provided then Liri will default to "The Sign" by Ace of Base.


![Alt Text](http://g.recordit.co/JKATHNmBt0.gif)

Concert search
------
### node liri.js concert-this <'artist/band name here'>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=") for an artist and render the following information about each event to the terminal:

  * Name of the venue

  * Venue location

  * Date of the Event (uses moment to format as "MM/DD/YYYY")

![Alt Text](http://g.recordit.co/rlRl35WFul.gif)

Movie search
------
### node liri.js movie-this <'movie name here'>

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  
  ** If no movie is provided then Liri will default to "Mr.Nobody".


![Alt Text](http://g.recordit.co/QLneE1QYh7.gif)

