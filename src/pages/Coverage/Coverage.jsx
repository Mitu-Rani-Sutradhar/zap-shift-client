import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.8103, -90.4125];
    const serviceCenters = useLoaderData();
    const mapRef = useRef();


    // console.log(serviceCenters);


    const handleSearch = e => {
        e.preventDefault();
            const location = e.target.location.value;
            const district = serviceCenters.find(center => center.city.toLowerCase().
            includes(location.toLowerCase()));

            if (district) {
                const coord = [district.latitude, district.longitude];
                // You can use the coord to set the map view or do something else
                console.log(district,coord);
                mapRef.current.flyTo(coord,14); 

            }
    }



    return (
        <div>
            <h2 className='py-8 font-bold text-center text-3xl'>We are available in 64 districts</h2>
            
            
            <div className='py-6'>
                <form onSubmit={handleSearch}>
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className="grow" name="location" placeholder="Search" />
 
</label>
                </form>
            </div>





            <div>
                <MapContainer center={position} zoom={8} scrollWheelZoom={false} 
                ref={mapRef}
                style={{ height: "400px", width: "100%" }}>
                     <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     />

                 {
                    serviceCenters.map((center, index) => 
                        <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.city}</strong> <br />
                                Service Area: {center.covered_area.join(', ')} <br />
                              
                            </Popup>
                        </Marker>
                    )

                 }

                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;