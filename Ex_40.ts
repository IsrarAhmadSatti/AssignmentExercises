function make_album(artName:String,albTitle:String,numTracks:number){
    const firstObj={
        name:artName,
        title:albTitle,
        tracks:numTracks
    }
    return firstObj
}

let artName="Bob Marley";
let albTitle="Three little birds"
let numTracks=10;
console.log(make_album(artName,albTitle,numTracks))

let artist='Ed sheeran'
let album='I don\'t know'
const songs=7
console.log(make_album(artist,album,songs))
