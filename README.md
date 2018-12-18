# Liri Bot
Similar to Siri, the Liri bot will take in commands and provide responses. 

## Description

Liri searches the following APIs: Spotify, OMDB, or Bands In Town based on which command it receives. The three commands that Liri will accept are 'spotify-this-song', 'movie-this', and 'concert-this'. After taking in the command as well as either an artist, song, or movie, Liri will output to the terminal the first result of the queried API.

Spotify search
------
### node liri.js spotify-this-song <song name here>

This will show the following information about the song in your terminal/bash window

Artist(s)

  - The song's name

  - A preview link of the song from Spotify

  - The album that the song is from


![Alt Text](http://g.recordit.co/lU8HJYaO04.gif)

Concert search
------
![Alt Text](http://g.recordit.co/rlRl35WFul.gif)

Movie search
------
![Alt Text](http://g.recordit.co/gYYvDGSb8S.gif)

What Each Command Should Do
node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue

Venue location

Date of the Event (use moment to format this as "MM/DD/YYYY")


You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

Step One: Visit https://developer.spotify.com/my-applications/#!/

Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!

You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

Edit the text in random.txt to test out the feature for movie-this and concert-this
