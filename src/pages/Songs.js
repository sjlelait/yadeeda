import React, { useState } from 'react';
import SongList from '../components/SongList';
import {songs} from '../MusicData';
import Album from '../components/Album';

const Songs = (props) => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    const filteredSongs = selectedAlbum
        ? songs.filter((song) => {
            if (Array.isArray(song.album)) {
            return song.album.some((album) => album === selectedAlbum);
            } else {
            return song.album === selectedAlbum;
            }
        })
        : songs;

    const album = [...new Set(songs.flatMap((song) => {
        if (Array.isArray(song.album)) {
        return song.album;
        } else {
        return [song.album];
        }
    }))];

    return (
    <div>
        <h1>Yadeeda Songs from Albums</h1>
        <Album
            album={album}
            selectedAlbum={selectedAlbum}
            setSelectedAlbum={setSelectedAlbum}
        />
        <SongList songs={filteredSongs} />
    </div>
    );
};

export default Songs;