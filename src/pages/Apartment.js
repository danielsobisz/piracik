import React from 'react';
import SlideshowApartment from '../components/SlideshowApartment'
import '../styles/Rooms.css'


class Apartment extends React.Component {
    state = {}
    render() {


        return (
            <div>
                <SlideshowApartment />

                <div className="room-contents">
                    <div className="room-text">
                        <p>Apartament/studio 4-osobowe znajduje się na niskim parterze. </p>
                        <p>Składa się z:</p>
                        <p>
                            - dwóch pokoi dwuosobowych, (w każdym pokoju znajduje się łoże małżeńskie, szafa, komoda,
                    TV.)</p>
                        <p>- łazienki z kabiną prysznicową,</p>
                        <p>- kuchni (lodówka, mobilna płyta indukcyjna, czajnik, mikrofalówka, naczynia i sztućce) oraz
                    przestronnego korytarza.</p>

                    </div>
                    <div className="room-price-block"><p>od 60 zł/os</p></div>
                </div>

            </div>
        );
    }
}

export default Apartment;