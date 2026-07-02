import { Link } from "react-router-dom";
import { useEffect } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


export default function PathGenerator() {
    

    // run once on mount only, dont need on every render
    useEffect(() => {
        const map = L.map('leafletmap').setView([36.7378, -119.7871], 14); 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
    }, []);
   

    return (
        <div style={{flexDirection: "row-reverse", display: "flex", alignItems: "flex-start"}}>
            <div>
                <h1> Pedestrian Path Pal </h1>
                <h4> Click the map to lay down a route! </h4>
                

            </div>
            <div id="leafletmap" style={{height:"100vh"}}></div>
        </div>
        
    );
}