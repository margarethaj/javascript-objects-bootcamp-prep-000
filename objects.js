var playlist = new Object({ namaArtist : 'judulLagu'});

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName] : songTitle} )
}
