const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       //for (let key in library) {                           //Iterating over all Keys in library
       //if(searchKey === 'playlists') {                        //Finding playlists that matches searchKey ("playlists")
       for (let key in library.playlists) {                                    //Itering over all Keys of playlists (library.playlists)
              let count = 0;                                                    //Initializing counter to store no. of tracks in each playlist of playlists (library.playlist.tracks)
              if(Array.isArray(library.playlists[key]['tracks']))              //Checking if value of library.playlists.tracks is an Array
              {
                     for (let track of library.playlists[key]['tracks']) {     //Iterating over each element of the array
                     count += 1;                                                //Incrementing the counter for each track
                     }
              }
              console.log(`${key}: ${library.playlists[key]['name']} - ${count} tracks`);   //Getting info of each sub-key (name, number of tracks) in Playlist Property
       }
       //}
      // }
};
printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for (let key in library.tracks) {                      //Iterating over all keys of tracks (library.tracks)
              console.log(`${key}: ${library.tracks[key]['name']} by ${library.tracks[key]['artist']} (${library.tracks[key]['album']})`);  //Getting info of each sub-key (name, artist, album) in the Tracks Property
       }
}
printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       for (let key in library.playlists) {                                             //Itering over all Keys of playlists (library.playlists)
              if(key === playlistId) {                                                  //Finding playlists that matches playlistId ("playlists")
                     let count = 0;                                                     //Initializing counter to store no. of tracks in each playlist of playlists (library.playlist.tracks)
                     if(Array.isArray(library.playlists[key]['tracks']))                //Checking if value of library.playlists.tracks is an Array
                     {
                            for (let element of library.playlists[key]['tracks']) {           //Iterating over each element of the array
                                   count += 1;                                                //Incrementing the counter for each track
                            }
                     }
                     console.log(`${key}: ${library.playlists[key]['name']} - ${count} tracks`);   //Getting info of each sub-key (name, number of tracks) in Playlist Property
                     
                     for (let track of library.playlists[key]['tracks']) {                     //Iterating over each element of the track values array for each sub-key in the Playlists Property
                            console.log(`${track}: ${library.tracks[track]['name']} by ${library.tracks[track]['artist']} (${library.tracks[track]['album']})`);  //Using that array element to search and provide corresponding track info (name, artist, album) in the Tracks Property
                     }
              }
       }
}
printPlaylist('p01');


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {

}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}