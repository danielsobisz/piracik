import React from 'react';
import SlideshowDelux from '../components/SlideshowDelux';
import '../styles/Rooms.css'

const Delux = () => {
    return (
        <div>
            <SlideshowDelux />
            <div className="room-contents">
                <div className="room-text">
                    <p>Pokój 3 lub 4-osobowy z własną łazienką (z wanną narożną) oraz balkonem. W pokoju znajduje
                    się łoże małżeńskie, rozkładana kanapa 2-osobowa, szafa, szafka nocna, TV, stolik, krzesła,
                    lodówka oraz czajnik. Dla gości dostępna jest również jadalnia gdzie można korzystać z naczyń
                    oraz mikrofalówki.
                    </p>

                </div>
                <div className="room-price-block"><p>od 50 zł/os</p></div>
            </div>
        </div>
    );
}

export default Delux;