import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../styles/image-gallery.css"
const standard = [
    {
        original: 'https://i.ibb.co/cJVSxHc/slide1.jpg',
        thumbnail: 'https://i.ibb.co/cJVSxHc/slide1.jpg',
    },
    {
        original: 'https://i.ibb.co/JHGbyP8/slide3.jpg',
        thumbnail: 'https://i.ibb.co/JHGbyP8/slide3.jpg',
    },
    {
        original: 'https://i.ibb.co/hsJWYzX/slide4.jpg',
        thumbnail: 'https://i.ibb.co/hsJWYzX/slide4.jpg',
    },
    {
        original: 'https://i.ibb.co/K04stmq/slide5.jpg',
        thumbnail: 'https://i.ibb.co/K04stmq/slide5.jpg',
    },
    {
        original: 'https://i.ibb.co/gdd2HQL/slide6.jpg',
        thumbnail: 'https://i.ibb.co/gdd2HQL/slide6.jpg',
    },
    {
        original: 'https://i.ibb.co/bLXDFSX/slide7.jpg',
        thumbnail: 'https://i.ibb.co/bLXDFSX/slide7.jpg',
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
        return <ImageGallery items={standard} showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
            showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton} />;
    }
}

export default SlideshowStandard


