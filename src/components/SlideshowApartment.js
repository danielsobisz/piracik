import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../styles/image-gallery.css"

const apartment = [
    {
        original: 'https://i.ibb.co/nc5tSv5/apartament.jpg',
        thumbnail: 'https://i.ibb.co/nc5tSv5/apartament.jpg',
    },
    {
        original: 'https://i.ibb.co/nwMHD5K/apartament2.jpg',
        thumbnail: 'https://i.ibb.co/nwMHD5K/apartament2.jpg',
    },
    {
        original: 'https://i.ibb.co/Xxxrgf1/apartament3.jpg',
        thumbnail: 'https://i.ibb.co/Xxxrgf1/apartament3.jpg',
    },
    {
        original: 'https://i.ibb.co/w6C44qy/apartament4.jpg',
        thumbnail: 'https://i.ibb.co/w6C44qy/apartament4.jpg',
    },
    {
        original: 'https://i.ibb.co/6ZB4WxF/apartament5.jpg',
        thumbnail: 'https://i.ibb.co/6ZB4WxF/apartament5.jpg',
    },
    {
        original: 'https://i.ibb.co/RPBtF7p/apartament6.jpg',
        thumbnail: 'https://i.ibb.co/RPBtF7p/apartament6.jpg',
    },
    {
        original: 'https://i.ibb.co/Xt8z1jM/apartament7.jpg',
        thumbnail: 'https://i.ibb.co/Xt8z1jM/apartament7.jpg',
    },
    {
        original: 'https://i.ibb.co/3MR8q5G/apartament8.jpg',
        thumbnail: 'https://i.ibb.co/3MR8q5G/apartament8.jpg',
    },
    {
        original: 'https://i.ibb.co/Qc6gLmZ/apartament9.jpg',
        thumbnail: 'https://i.ibb.co/Qc6gLmZ/apartament9.jpg',
    },
    {
        original: 'https://i.ibb.co/MpR9gFs/apartament10.jpg',
        thumbnail: 'https://i.ibb.co/MpR9gFs/apartament10.jpg',
    },
    {
        original: 'https://i.ibb.co/pb08bB2/apartament11.jpg',
        thumbnail: 'https://i.ibb.co/pb08bB2/apartament11.jpg',
    },
    {
        original: 'https://i.ibb.co/mBJrzp7/apartament-12.jpg',
        thumbnail: 'https://i.ibb.co/mBJrzp7/apartament-12.jpg',
    },
    {
        original: 'https://i.ibb.co/VYTHsr8/apartament-13.jpg',
        thumbnail: 'https://i.ibb.co/VYTHsr8/apartament-13.jpg',
    },
    {
        original: 'https://i.ibb.co/c11gC1M/apartament-14.jpg',
        thumbnail: 'https://i.ibb.co/c11gC1M/apartament-14.jpg',
    },
    {
        original: 'https://i.ibb.co/Sss8Wrm/apartament15.jpg',
        thumbnail: 'https://i.ibb.co/Sss8Wrm/apartament15.jpg',
    },
];
class SlideshowStandard extends React.Component {
    constructor() {
        super();
        this.state = {
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
            showPlayButton: false,

        };
    }
    render() {
        return <ImageGallery items={apartment} showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
            showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton} />
    }
}


export default SlideshowStandard;


