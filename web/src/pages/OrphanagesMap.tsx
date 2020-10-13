import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";

//style
import "../styles/pages/orphanagesMap.css";
import "leaflet/dist/leaflet.css";

//icon
import { FiPlus } from "react-icons/fi";

//imgs
import mapMarkerImg from "../images/map_marker.svg";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>São José dos Campos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.1548714, -45.9134861]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
