import React, { useState } from 'react';
import SongList from '../components/SongList';
import {songs} from '../MusicData';
import Album from '../components/Album';
import PurchaseButtons from '../components/PurchaseButtons';

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
            <div>
                <h1 className="text-xl mt-24 text-2xl lg:mt-16 lg:mb-8 lg:text-3xl font-bold font-homeP underline text-ydPurple">Yadeeda Songs</h1>
                <Album
                    album={album}
                    selectedAlbum={selectedAlbum}
                    setSelectedAlbum={setSelectedAlbum}
                />
                <SongList songs={filteredSongs} />
            </div>
            <div className="mt-auto">
                <PurchaseButtons />
            </div>
        </div>
    );
};

export default Songs;