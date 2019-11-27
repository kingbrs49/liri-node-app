# liri-node-app

Hello! And Welcome to LIRI: The Node App dedicated to giving you the latest info on Spotify music, movies, and concerts all over the country!

In this modern world we live in, everyone needs information on the go, in the quickest way possible. While many tend to use SIRI ("Speech Interpretation and Recognition Interface") for all of their instant gratification needs, LIRI -- or "Language Interpretation and Recognition Interface" -- uses the latest in Node.js technology to bring you the music, movie, and concert information you crave, all at your bash terminal fingertips!

This app was designed specifically to get information through three different websites via their APIs:
    1) The popular music streaming site SPOTIFY; 
    2) Movie information website Open Movie Database (OMDb); and
    3) "Bands in Town", a website for all of your concert-going needs, including tour dates, venues and locations.

It was also designed specifically for use with Node JS, a programming platform used for server-side scripting. As Wikipedia describes Node:

> [Node JS is] an open-source, cross-platform, JavaScript runtime 
> environment that executes JavaScript code outside of a browser.

Because of the nature of Node JS, we can pass specific commands into its program terminal, and it will spit out the information we need. In the case of LIRI, we feed into it specific commands for the following:

    * `spotify-this-song`: 
        By using this command and typing the name of a specific song (i.e. `Baby One More Time`,   `Nevermind`, `Teach Me How To Dougie`, etc.), LIRI will access the Spotify API and gather every song with that name. LIRI will then give you the Top 25 results of that song title, displaying the following:
            * Artist
            * Song Name
            * Spotify's Preview Link
            * Album
        From there, you can do with the information as you wish -- peruse different songs, look for their albums, look more into the artists, themselves, etc.
        It should also be known that if you don't type anything following the `spotify-this-song` command, LIRI will automatically retrieve the song information to Ace of Base's "The Sign", and display the song's Top 25 results on Spotify.
    * `movie-this`: 
        By using this command and typing the name of a film, LIRI will use OMDb's API to look for the specific film title, and return the top result for said title. The information that the command returns is as follows:
            * Film Name
            * Release Date
            * IMDb Rating
            * Rating from Rotten Tomatoes (out of 10)
            * Country of Production
            * Film languages
            * Plot
            * 4 Top-billed Actors/Actresses
        It should also be known that if you don't type anything following `movie-this`, LIRI will automatically retrieve the film information to 2009's "Mr. Nobody" -- a film you can find on Netflix.
    * `concert-this`: 
        By using this command and typing the name of a popular recording artist, LIRI will use the website Bands In Town (https://rest.bandsintown.com/) and look up the artist's most recent upcoming concert venue. The information displayed is as follows:
            * Venue Name
            * Venue City
            * Concert Date
        It should be noted that, in order for LIRI to retrieve the concert date in its printed form (MM/DD/YYYY), LIRI uses `moment.js` for the updated display.
    * `do-what-it-says`: 
        By using this command, LIRI will get information from a built-in file, `random.txt`. The file will already have a text command embedded in the file -- LIRI will take that command, run it through the terminal, and translate it as a specific LIRI command. In this case, the `random.txt` file reads:
            spotify-this-song,"I Want it That Way"
        ... which means that LIRI will use the command `spotify-this-song` and look up the title "I Want It That Way".

For this app, I painstakingly wrote all of the code (with the help of some hints by the homework instructions and other resources) to make LIRI functional. 

![Alt text](https://raw.githubusercontent.com/kingbrs49/liri-node-app/branch/path/to/1.png)
![Alt text](https://raw.githubusercontent.com/kingbrs49/liri-node-app/branch/path/to/2.png)
![Alt text](https://raw.githubusercontent.com/kingbrs49/liri-node-app/branch/path/to/3.png)
![Alt text](https://raw.githubusercontent.com/kingbrs49/liri-node-app/branch/path/to/4.png)
![Alt text](https://raw.githubusercontent.com/kingbrs49/liri-node-app/branch/path/to/5.png)
![Alt text](https://raw.githubusercontent.com/kingbrs49/liri-node-app/branch/path/to/6.png)
![Alt text](https://raw.githubusercontent.com/kingbrs49/liri-node-app/branch/path/to/7.png)
![Alt text](https://raw.githubusercontent.com/kingbrs49/liri-node-app/branch/path/to/8.png)
![Alt text](https://raw.githubusercontent.com/kingbrs49/liri-node-app/branch/path/to/9.png)
