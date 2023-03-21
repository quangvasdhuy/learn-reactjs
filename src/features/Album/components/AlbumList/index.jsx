import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
    return (
        <div>
            <ul className="album-List">
                {albumList.map(album => (
                    <li key ={album.id}>
                        <Album album={album}></Album>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;