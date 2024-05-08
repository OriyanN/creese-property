// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import Select from 'react-select';

// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// import Footer from '../components/Footer';
// import ScrollToTop from '../components/ScrollToTop';
// import LazyImage from '../components/LazyImage';

// import GoldCoastPropertiesData from '../pages/GoldCoast/GoldCoastPropertiesData';
// import BrisbanePropertiesData from '../pages/Brisbane/BrisbanePropertiesData';
// import IpswichPropertiesData from '../pages/Ipswich/IpswichPropertiesData';
// import LoganPropertiesData from '../pages/Logan/LoganPropertiesData';
// import SunshineCoastPropertiesData from '../pages/SunshineCoast/SunshineCoastPropertiesData';
// import "./LocationsPage.css";

// // import mainInitialImage from "../assets/Brisbane/brisbane.jpg";
// import mainInitialImage from "../assets/gold-coast4.png";
// import mainGoldCoast from "../assets/GoldCoast/gold-coast.jpg";
// import mainBrisbane from "../assets/Brisbane/brisbane.jpg";
// import mainIpswich from "../assets/Ipswich/ipswich.jpg";
// import mainLogan from "../assets/Logan/logan.jpg";
// import mainSunshineCoast from "../assets/SunshineCoast/sunshine-coast1.png";
// import PropertyFeatures from '../components/PropertyFeatures';
// import PropertyBeds from '../components/PropertyBeds';
// import PropertyBaths from '../components/PropertyBaths';
// import PropertyCars from '../components/PropertyCars';
// import PropertyLocations from '../components/PropertyLocations';

// const LocationsPage = () => {
//     const allPropertiesData = [
//         ...GoldCoastPropertiesData,
//         ...BrisbanePropertiesData,
//         ...IpswichPropertiesData,
//         ...LoganPropertiesData,
//         ...SunshineCoastPropertiesData
//     ];

//     const extractUniqueFeatures = () => {
//         const featuresSet = new Set();
//         allPropertiesData.forEach(property => property.features.forEach(feature => featuresSet.add(feature)));
//         return Array.from(featuresSet);
//     };

//     const [filters, setFilters] = useState({
//         locationFilter: 'All',
//         suburbSearch: '',
//         featuresFilter: [],
//         bedsFilter: '',
//         bathsFilter: '',
//         carFilter: '',
//     });    

//     const [currentMainImage, setCurrentMainImage] = useState(mainInitialImage);
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [selectedFeatures, setSelectedFeatures] = useState([]);
//     const features = ["Air Conditioning", "Pool", "Garage", "Garden", "Balcony"]; // Example features

//     const handleLocationChange = (event) => {
//         const newLocation = event.target.value;
//         setFilters(prevFilters => ({
//             ...prevFilters,
//             locationFilter: newLocation
//         }));
//     };

//     useEffect(() => {
//         const locationImages = {
//             "All": mainInitialImage,
//             "Gold Coast": mainGoldCoast,
//             "Brisbane": mainBrisbane,
//             "Ipswich": mainIpswich,
//             "Logan": mainLogan,
//             "SunshineCoast": mainSunshineCoast,
//         };
//         setCurrentMainImage(locationImages[filters.locationFilter] || mainInitialImage);
//     }, [filters.locationFilter]);

//     const createOptions = (key) => {
//         const optionsSet = new Set(allPropertiesData.map(property => property[key]));
//         return [...optionsSet].sort((a, b) => a - b).map(option => 
//             <option key={option} value={option}>{option}</option>
//         );
//     };

//     const filteredProperties = allPropertiesData.filter(property =>
//         (filters.locationFilter === 'All' || property.location === filters.locationFilter) &&
//         (filters.suburbSearch === '' || property.address.toLowerCase().includes(filters.suburbSearch.toLowerCase())) &&
//         (filters.featuresFilter.length === 0 || filters.featuresFilter.every(feat => property.features.includes(feat))) &&
//         (filters.bedsFilter === '' || (property.beds || '').toString() === filters.bedsFilter) &&
//         (filters.bathsFilter === '' || (property.baths || '').toString() === filters.bathsFilter) &&
//         (filters.carFilter === '' || (property.car || '').toString() === filters.carFilter)
//     );

//     const handleFeatureChange = (event) => {
//         const { value, checked } = event.target;
//         const newFeatures = checked
//             ? [...selectedFeatures, value]
//             : selectedFeatures.filter(f => f !== value);
//         setSelectedFeatures(newFeatures);
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     useEffect(() => {
//         const closeDropdown = (e) => {
//             if (e.target.closest('.feature-dropdown') === null) {
//                 setDropdownOpen(false);
//             }
//         };

//         document.addEventListener('click', closeDropdown);
//         return () => document.removeEventListener('click', closeDropdown);
//     }, []);

//     const selectedText = selectedFeatures.length > 0 ? selectedFeatures.join(', ') : "Features";

//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const markers = useRef([]);

//     // Initialize map only once
//     useEffect(() => {
//         mapboxgl.accessToken = 'pk.eyJ1IjoicHJvcGVsbHByb3BlcnR5IiwiYSI6ImNsdWttNWs1cjA1dGcycW9hZnRwZ2theHgifQ.erDmDuOiR1yww8zsDYuIaA';
//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/propellproperty/clukscow600cw01pw1cai5fqu',
//             center: [153.1, -27.4], // Centered at Southeast Queensland
//             zoom: 8
//         });

//         return () => map.current?.remove();
//     }, []);

//     // Update markers based on filters
//     useEffect(() => {
//         // Remove all current markers
//         markers.current.forEach(marker => marker.remove());
//         markers.current = [];

//         // Add new markers based on filtered properties
//         filteredProperties.forEach(property => {

//             if (isNaN(property.lng) || isNaN(property.lat)) {
//                 console.error("Invalid coordinates for property:", property);
//                 return; // Skip creating a marker for this property
//             }

//             const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
//                 `<div>
//                     <img src="${property.images[0]}" alt="Property Image" style="width: 100%; height: auto;" />
//                     <h3>${property.address}</h3>
//                     <p>Beds: ${property.beds}, Baths: ${property.baths}, Cars: ${property.car}</p>
//                 </div>`
//             );

//             const marker = new mapboxgl.Marker()
//                 .setLngLat([property.lng, property.lat])
//                 .setPopup(popup)
//                 .addTo(map.current);

//             markers.current.push(marker);
//         });
//     }, [filteredProperties]);
    
//     return (
//         <>
//             <Helmet>
//                 <title>Leasing | Creese Property</title>
//                 <meta name="description" content="Leasing page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
//                 <meta name="robots" content="noindex"/>
//                 <link rel="canonical" href="/locations" />
//             </Helmet>
//             <ScrollToTop />
//             <section className="section location">
//                 <h1 className='location-name'>Leasing</h1>
//                 <div className="initial-image">
//                     <img src={currentMainImage} alt="Creese Property - Leasing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                     <div className="overlay"></div>
//                 </div>
//                 <div className="search">
//                     <div className="location-search">
//                         <div className="leasing-location-filtering">
//                             <div className="location-filter">
//                                 {/* <PropertyLocations /> */}
//                                 {/* <PropertyLocations onChange={setLocationFilter} /> */}
//                                 <select 
//                                     id="locationFilter"
//                                     value={filters.locationFilter}
//                                     onChange={handleLocationChange}
//                                 >
//                                     <option value="All">All Locations</option>
//                                     <option value="Gold Coast">Gold Coast</option>
//                                     <option value="Brisbane">Brisbane</option>
//                                     <option value="Ipswich">Ipswich</option>
//                                     <option value="Logan">Logan</option>
//                                     <option value="SunshineCoast">Sunshine Coast</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="leasing-location-filtering">
//                             <div className="suburb-filter">
//                                 <input
//                                     type="text"
//                                     placeholder="Suburb"
//                                     value={filters.suburbSearch}
//                                     onChange={(e) => setFilters({ ...filters, suburbSearch: e.target.value })}
//                                 />
//                             </div>
//                             <div className="feature-filter">
//                                 {/* <PropertyFeatures /> */}
//                                 <div className="feature-dropdown">
//                                     <button
//                                         onClick={toggleDropdown}
//                                         style={{ width: '100%', textAlign: 'left', fontSize: '2.25rem'}}
//                                         className={selectedFeatures.length > 0 ? '' : 'underline-only'}
//                                     >
//                                         {selectedText}
//                                     </button>
//                                     {dropdownOpen && (
//                                         <div style={{
//                                             position: 'absolute',
//                                             width: '100%',
//                                             border: '1px solid #ccc',
//                                             backgroundColor: '#fff',
//                                             zIndex: 1000,
//                                             overflowY: 'auto',
//                                             maxHeight: '200px'
//                                         }}>
//                                             {features.map(feature => (
//                                                 <label key={feature} style={{ display: 'flex', padding: '10px', fontSize: '2.25rem' }}>
//                                                     <input
//                                                         type="checkbox"
//                                                         value={feature}
//                                                         checked={selectedFeatures.includes(feature)}
//                                                         onChange={handleFeatureChange}
//                                                         style={{ marginRight: '15px' }}
//                                                     />
//                                                     {feature}
//                                                 </label>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="filters">
//                         <div className="leasing-location-filtering">
//                             <div className="beds-filter">
//                                 {/* <PropertyBeds /> */}
//                                  <select 
//                                     id="bedsFilter"
//                                     value={filters.bedsFilter}
//                                     onChange={(e) => setFilters({ ...filters, bedsFilter: e.target.value })}
//                                     className={!filters.bedsFilter ? '' : ''}
//                                     aria-label="Filter by number of beds"
//                                 >
//                                     <option value="">Bed</option>
//                                     {createOptions('beds')}
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="leasing-location-filtering">
//                             <div className="car-filter">
//                                 {/* <PropertyCars /> */}
//                                 <select 
//                                     id="carFilter"
//                                     value={filters.carFilter}
//                                     onChange={(e) => setFilters({ ...filters, carFilter: e.target.value })}
//                                     className={!filters.carFilter ? '' : ''}
//                                     aria-label="Filter by car spaces"
//                                 >
//                                     <option value="">Car</option>
//                                     {createOptions('car')}
//                                 </select>
//                             </div>
//                             <div className="baths-filter">
//                                 {/* <PropertyBaths /> */}
//                                 <select 
//                                     id="bathsFilter"
//                                     value={filters.bathsFilter}
//                                     onChange={(e) => setFilters({ ...filters, bathsFilter: e.target.value })}
//                                     className={!filters.bathsFilter ? '' : ''}
//                                     aria-label="Filter by number of baths"
//                                 >
//                                     <option value="">Bath</option>
//                                     {createOptions('baths')}
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="properties-container">
//                     <div className="images-container">
//                         {filteredProperties.length > 0 ? (
//                             filteredProperties.map((property) => (
//                                 <div key={property.id} className="image-item-container">
//                                     <Link to={`/locations/gold-coast/properties/${property.id}`}>
//                                         <LazyImage src={property.images[0]} alt={`Property ${property.id}`} className="image-item" />
//                                     </Link>
//                                     <div className="location-details">
//                                         <h4>{property.address}</h4>
//                                         <p>{property.beds} Bed - {property.baths} Bath - {property.car} Car</p>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No properties match your criteria.</p>
//                         )}
//                     </div>
//                     <div ref={mapContainer} className="map-container" style={{ height: '85vh', width: '100%', borderRadius: '0.25rem', position: 'sticky' }} />
//                 </div>
//                 <Footer />
//             </section>
//         </>
//     );
// };

// export default LocationsPage;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Select from 'react-select';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LazyImage from '../components/LazyImage';

import GoldCoastPropertiesData from '../pages/GoldCoast/GoldCoastPropertiesData';
import BrisbanePropertiesData from '../pages/Brisbane/BrisbanePropertiesData';
import IpswichPropertiesData from '../pages/Ipswich/IpswichPropertiesData';
import LoganPropertiesData from '../pages/Logan/LoganPropertiesData';
import SunshineCoastPropertiesData from '../pages/SunshineCoast/SunshineCoastPropertiesData';
import "./LocationsPage.css";

// import mainInitialImage from "../assets/Brisbane/brisbane.jpg";
import mainInitialImage from "../assets/gold-coast4.png";
import mainGoldCoast from "../assets/GoldCoast/gold-coast.jpg";
import mainBrisbane from "../assets/Brisbane/brisbane.jpg";
import mainIpswich from "../assets/Ipswich/ipswich.jpg";
import mainLogan from "../assets/Logan/logan.jpg";
import mainSunshineCoast from "../assets/SunshineCoast/sunshine-coast1.png";

const LocationsPage = () => {
    const allPropertiesData = [
        ...GoldCoastPropertiesData.map(item => ({ ...item, location: 'Gold Coast' })),
        ...BrisbanePropertiesData.map(item => ({ ...item, location: 'Brisbane' })),
        ...IpswichPropertiesData.map(item => ({ ...item, location: 'Ipswich' })),
        ...LoganPropertiesData.map(item => ({ ...item, location: 'Logan' })),
        ...SunshineCoastPropertiesData.map(item => ({ ...item, location: 'Sunshine Coast' })),
    ];

    const [filters, setFilters] = useState({
        locationFilter: null,
        suburbSearch: '',
        bedsFilter: null,
        bathsFilter: null,
        carFilter: null,
        featuresFilter: []
    });

    const [currentMainImage, setCurrentMainImage] = useState(mainInitialImage);
    const locationImages = {
        "All": mainInitialImage,
        "Gold Coast": mainGoldCoast,
        "Brisbane": mainBrisbane,
        "Ipswich": mainIpswich,
        "Logan": mainLogan,
        "Sunshine Coast": mainSunshineCoast,
    };

    const [selectedLocation, setSelectedLocation] = useState({ value: 'All', label: 'All Locations' });

    const locationOptions = [
        { value: 'All', label: 'All Locations' },
        { value: 'Gold Coast', label: 'Gold Coast' },
        { value: 'Brisbane', label: 'Brisbane' },
        { value: 'Ipswich', label: 'Ipswich' },
        { value: 'Logan', label: 'Logan' },
        { value: 'Sunshine Coast', label: 'Sunshine Coast' }
    ];

    const bedsOptions = Array.from(new Set(allPropertiesData.map(p => p.beds)))
        .map(beds => ({ value: beds, label: `${beds}` }));
    const bathsOptions = Array.from(new Set(allPropertiesData.map(p => p.baths)))
        .map(baths => ({ value: baths, label: `${baths}` }));
    const carOptions = Array.from(new Set(allPropertiesData.map(p => p.car)))
        .map(car => ({ value: car, label: `${car}` }));
    const featureOptions = Array.from(new Set(allPropertiesData.flatMap(p => p.features)))
        .map(feature => ({ value: feature, label: feature }));

    useEffect(() => {
        if (filters.locationFilter && locationImages[filters.locationFilter]) {
            setCurrentMainImage(locationImages[filters.locationFilter]);
        } else {
            setCurrentMainImage(mainInitialImage);
        }
    }, [filters.locationFilter]);

    const handleLocationChange = selectedOption => {
        setFilters(currentFilters => ({ ...currentFilters, locationFilter: selectedOption ? selectedOption.value : null }));
    };
    const handleFeatureChange = selectedOptions => {
        setFilters(currentFilters => ({ ...currentFilters, featuresFilter: selectedOptions || [] }));
    };

    const filteredProperties = allPropertiesData.filter(property => {
        return (
            (!filters.locationFilter || filters.locationFilter === 'All' || property.location === filters.locationFilter) &&
            (!filters.suburbSearch || property.address.toLowerCase().includes(filters.suburbSearch.toLowerCase())) &&
            (!filters.bedsFilter || property.beds === filters.bedsFilter.value) &&
            (!filters.bathsFilter || property.baths === filters.bathsFilter.value) &&
            (!filters.carFilter || property.car === filters.carFilter.value) &&
            (filters.featuresFilter.length === 0 || filters.featuresFilter.every(f => property.features.includes(f.value)))
        );
    });
    
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#616e89' : (state.isFocused ? '#294162' : provided.backgroundColor),
          color: state.isSelected ? 'white' : (state.isFocused ? 'white' : provided.color),
        }),
    };

    useEffect(() => {
        setCurrentMainImage(locationImages[selectedLocation.value]);
    }, [selectedLocation]);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const markers = useRef([]);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicHJvcGVsbHByb3BlcnR5IiwiYSI6ImNsdWttNWs1cjA1dGcycW9hZnRwZ2theHgifQ.erDmDuOiR1yww8zsDYuIaA';
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/propellproperty/clukscow600cw01pw1cai5fqu',
            center: [153.1, -27.4],
            zoom: 8
        });

        return () => map.current?.remove();
    }, []);

    useEffect(() => {
        markers.current.forEach(marker => marker.remove());
        markers.current = [];

        filteredProperties.forEach(property => {

            if (isNaN(property.lng) || isNaN(property.lat)) {
                console.error("Invalid coordinates for property:", property);
                return;
            }

            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<div>
                    <img src="${property.images[0]}" alt="Property Image" style="width: 100%; height: auto;" />
                    <h3>${property.address}</h3>
                    <p>Beds: ${property.beds}, Baths: ${property.baths}, Cars: ${property.car}</p>
                </div>`
            );

            const marker = new mapboxgl.Marker()
                .setLngLat([property.lng, property.lat])
                .setPopup(popup)
                .addTo(map.current);

            markers.current.push(marker);
        });
    }, [filteredProperties]);
    
    return (
        <>
            <Helmet>
                <title>Leasing | Creese Property</title>
                <meta name="description" content="Leasing page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <meta name="robots" content="noindex"/>
                <link rel="canonical" href="/locations/gold-coast" />
            </Helmet>
            <ScrollToTop />
            <section className="section location">
                <h1 className='location-name'>Leasing</h1>
                <div className="initial-image">
                    <img src={currentMainImage} alt="Creese Property - Gold Coast" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="overlay"></div>
                </div>
                <div className="search">
                    <div className="location-search">
                        <div className="location-filter">
                            <Select
                                options={locationOptions}
                                onChange={handleLocationChange}
                                styles={customStyles}
                                placeholder="Location"
                                isClearable
                            />
                        </div>
                        <div className="bottom-filtering">
                            <div className="suburb-filter">
                                <input
                                    type="text"
                                    placeholder="Suburb"
                                    value={filters.suburbSearch}
                                    onChange={(e) => setFilters({ ...filters, suburbSearch: e.target.value })}
                                />
                            </div>
                            <div className="beds-filter">
                                <Select
                                    options={bedsOptions}
                                    onChange={option => setFilters(f => ({ ...f, bedsFilter: option }))}
                                    styles={customStyles}
                                    placeholder="Beds"
                                    isClearable
                                />
                            </div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="feature-dropdown">
                            <Select
                                options={featureOptions}
                                onChange={handleFeatureChange}
                                styles={customStyles}
                                placeholder="Features"
                                isMulti
                                isClearable
                            />
                        </div>
                        <div className="car-bath-filter">
                            <div className="baths-filter">
                                <Select
                                    options={bathsOptions}
                                    onChange={option => setFilters(f => ({ ...f, bathsFilter: option }))}
                                    styles={customStyles}
                                    placeholder="Baths"
                                    isClearable
                                />
                            </div>
                            <div className="car-filter">
                                <Select
                                    options={carOptions}
                                    onChange={option => setFilters(f => ({ ...f, carFilter: option }))}
                                    styles={customStyles}
                                    placeholder="Cars"
                                    isClearable
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="properties-container">
                    <div className="images-container">
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((property) => (
                                <div key={property.id} className="image-item-container">
                                    <Link to={`/locations/gold-coast/properties/${property.id}`}>
                                        <LazyImage src={property.images[0]} alt={`Property ${property.id}`} className="image-item" />
                                    </Link>
                                    <div className="location-details">
                                        <h4>{property.address}</h4>
                                        <p>{property.beds} Bed - {property.baths} Bath - {property.car} Car</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No properties match your criteria.</p>
                        )}
                    </div>
                    <div ref={mapContainer} className="map-container" style={{ height: '85vh', width: '100%', borderRadius: '0.25rem', position: 'sticky' }} />
                </div>
                <Footer />
            </section>
        </>
    );
};

export default LocationsPage;