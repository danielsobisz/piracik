import React from 'react';
import SlideshowStandard from '../components/SlideshowStandard';
import '../styles/Rooms.css'

const Standard = () => {
    return (
        <div>
            <SlideshowStandard />
            <div className="room-contents">
                <div className="room-text">
                    <p>Pokój 2-osobowy o wysokim standardzie, ma on wspólną łazienkę z drugim pokojem
                    2-osobowym obok. W pokoju znajduje się łoże małżeńskie, szafa, komoda, TV, stolik, krzesła,
                    lodówka oraz czajnik. Dla gości dostępna jest również jadalnia gdzie można korzystać z naczyń
                    oraz mikrofalówki.
                    </p>

                </div>
                <div className="room-price-block"><p>od 45 zł/os</p></div>
            </div>
        </div>
    );
}

export default Standard;