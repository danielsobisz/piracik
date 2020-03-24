import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Apartment from '../pages/Apartment';
import Delux from '../pages/Delux';
import Standard from '../pages/Standard';
import '../styles/Main.css'
const Main = () => {
    return (
        <main className="main">
            <div className="main-text-block">    <p className="main-text">Dom Wczasowy Piracik to kameralne miejsce, oferujące noclegi dla maksymalnie 12 osób.
            Serdecznie zapraszamy wszystkich gości, którzy chcą się zatrzymać w uroczej, nadmorskiej
            miejscowości jaką jest Jantar. Obiekt jest położony przy głównej drodze, nieopodal mini zoo.
            Do morza można dojść piękną, leśną drogą lub głównym deptakiem, który prowadzi przez
            centrum Jantara, gdzie znajdują się sklepy z pamiątkami oraz restauracje i bary, w których
można bardzo smacznie zjeść.</p></div>

            <div className="main-blocks">
                <NavLink to="/" exact className="main-block"><h3 className="main-block-text">apartament</h3></NavLink>
                <NavLink to="/standard" exact className="main-block"><h3 className="main-block-text">pokoje 2 osobowe</h3></NavLink>
                <NavLink to="/delux" exact className="main-block"><h3 className="main-block-text">delux</h3></NavLink>
            </div>
            <div className="room-content">
                <Switch>
                    <Route path="/" exact component={Apartment}></Route>
                    <Route path="/delux" exact component={Delux}></Route>
                    <Route path="/standard" exact component={Standard}></Route>
                </Switch>
            </div>
            <div className="background-div"></div>
            <div className="main-info">
                <p className="main-text">
                    Teren ogrodzony, bezpieczny. Miejsce na grilla, piaskownica dla dzieci, parking na terenie
                    posesji (w cenie). Do morza piękna, leśna droga.
                    W pobliżu znajduje się Mini Zoo oraz restauracje i bary, w których można bardzo smacznie i
                    tanio zjeść.
                    Doba hotelowa zaczyna się o godzinie 14.00, kończy o 10.00. Wszystkie formalności załatwiane
                    są w dniu przyjazdu (meldunek, płatność).
                    Przy rezerwacji obowiązuje zadatek w wysokości 30% kosztu całego pobytu.
                    Serdecznie Zapraszamy!
        </p>
            </div>

        </main>
    );
}

export default Main;