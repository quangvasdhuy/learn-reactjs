import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac Hoa Thinh Hanh',
            thumbnailUrl: '	https://i.scdn.co/image/ab67656300005f1f1036e4e4bd606e89c4b5da68',
        },
        {
            id: 2,
            name: 'Rap Viet nghe la ghien',
            thumbnailUrl: '	https://i.scdn.co/image/ab67656300005f1f1036e4e4bd606e89c4b5da68',
        },
        {
            id: 3,
            name: 'Trao Luu Nhac Hot',
            thumbnailUrl: '	https://i.scdn.co/image/ab67656300005f1f1036e4e4bd606e89c4b5da68',
        },

    ];
    return (
        <div>
            <h2>Co the ban se thich day</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;