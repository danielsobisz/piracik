import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../styles/image-gallery.css"
const delux = [
    {
        original: 'https://i.ibb.co/gFRTQZj/pok-j-delux.jpg',
        thumbnail: 'https://i.ibb.co/gFRTQZj/pok-j-delux.jpg',
    },
    {
        original: 'https://i.ibb.co/VWckH83/pok-j-delux2.jpg',
        thumbnail: 'https://i.ibb.co/VWckH83/pok-j-delux2.jpg',
    },
    {
        original: 'https://i.ibb.co/1rZThRV/azienka-pokoju-delux.jpg',
        thumbnail: 'https://i.ibb.co/1rZThRV/azienka-pokoju-delux.jpg',
    },
    {
        original: 'https://i.ibb.co/HnSQttg/lazienka-pokoju-delux2.png',
        thumbnail: 'https://i.ibb.co/HnSQttg/lazienka-pokoju-delux2.png',
    },

];

class SlideshowDelux extends React.Component {
    constructor() {
        super();
        this.state = {
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
            showPlayButton: false,

        };
    }
    render() {
        return <ImageGallery items={delux} showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
            showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton} />;
    }
}

export default SlideshowDelux


