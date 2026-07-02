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
        <div>
            <div id="leafletmap" style={{height:"50vh"}}></div>
        </div>
        
    );
}