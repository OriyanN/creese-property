import React, { useState } from 'react';

import "./LocationsPage.css";

import mainInitialImage from "../assets/brisbane.jpg";
import image1 from "../assets/1.jpg"
import image2 from "../assets/backyard-2023-11-27-04-52-38-utc.jpg"
import image3 from "../assets/facade-2023-11-27-05-20-28-utc.jpg"

const BrisbanePage = () => {

    const locationInfo = {
        name: "Brisbane",
        mainImage: mainInitialImage,
        images: [
            {
                url: image1,
                address: "Address 1, Brisbane",
                beds: 3,
                baths: 2,
                parking: 1,
            },
            {
                url: image2,
                address: "Address 2, Brisbane",
                beds: 4,
                baths: 3,
                parking: 3,
            },
            {
                url: image3,
                address: "Address 3, Brisbane",
                beds: 5,
                baths: 4,
                parking: 2,
            },
            {
                url: image1,
                address: "Address 4, Brisbane",
                beds: 6,
                baths: 7,
                parking: 4,
            },
            {
                url: image2,
                address: "Address 5, Brisbane",
                beds: 7,
                baths: 8,
                parking: 5,
            },
            {
                url: image3,
                address: "3 Sunrise Court, Merrimac",
                beds: 8,
                baths: 9,
                parking: 6,
            },
        ],
    };

    const [suburbSearch, setSuburbSearch] = useState('');
    const [bedsFilter, setBedsFilter] = useState('');
    const [bathsFilter, setBathsFilter] = useState('');
    const [parkingFilter, setParkingFilter] = useState('');

    const filteredImages = locationInfo.images.filter(image => 
        (suburbSearch === '' || image.address.toLowerCase().includes(suburbSearch.toLowerCase())) &&
        (bedsFilter === '' || image.beds.toString() === bedsFilter) &&
        (bathsFilter === '' || image.baths.toString() === bathsFilter) &&
        (parkingFilter === '' || image.parking.toString() === parkingFilter)
    );

    const createOptions = (key) => {
        const maxNumber = Math.max(...locationInfo.images.map(image => image[key] || 0));
        const options = Array.from({ length: maxNumber }, (_, i) => i + 1);
        return options;
    };
    
    return (
        <section className="section location">
            <h1 className='location-name'>{locationInfo.name}</h1>
            <div className="initial-image">
                <img src={locationInfo.mainImage} alt="Brisbane" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="overlay"></div>
            </div>
            <div className="search">
                <div className="suburb-search">
                    <input
                        type="text"
                        placeholder="Suburb"
                        value={suburbSearch}
                        onChange={(e) => setSuburbSearch(e.target.value)}
                    />
                </div>
                <div className="filters">
                    <div className="beds-filter">
                        <select 
                            id="bedsFilter" 
                            value={bedsFilter} 
                            onChange={e => setBedsFilter(e.target.value)} 
                            className={!bedsFilter ? 'placeholder' : ''}
                            aria-label="Filter by number of beds"
                        >
                            <option value="" >{bedsFilter ? `Show All` : "Beds"}</option>
                            {createOptions('beds').map(beds => (
                                <option key={beds} value={beds}>{beds}</option>
                            ))}
                        </select>
                    </div>
                    <div className="baths-filter">
                        <select 
                            id="bathsFilter" 
                            value={bathsFilter} 
                            onChange={e => 
                            setBathsFilter(e.target.value)} 
                            className={!bathsFilter ? 'placeholder' : ''}
                        >
                            <option value="" >{bathsFilter ? `Show All` : "Baths"}</option>
                            {createOptions('baths').map(baths => (
                                <option key={baths} value={baths}>{baths}</option>
                            ))}
                        </select>
                    </div>
                    <div className="parking-filter">
                        <select 
                            id="parkingFilter" 
                            value={parkingFilter} 
                            onChange={e => setParkingFilter(e.target.value)} 
                            className={!parkingFilter ? 'placeholder' : ''}
                        >
                            <option value="" >{parkingFilter ? `Show All` : "Parking"}</option>
                            {createOptions('parking').map(parking => (
                                <option key={parking} value={parking}>{parking}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="images-container">
                {filteredImages.length > 0 ? (
                    filteredImages.map((image, index) => (
                    <div key={image.address} className="image-item-container">
                        <img src={image.url} alt={`Brisbane ${index}`} className="image-item" />
                        <div className="location-details">
                            <h4>{image.address}</h4>
                            <p>{image.beds} Beds - {image.baths} Baths - {image.parking} Parking</p>
                        </div>
                    </div>
                ))) : (
                    <p>No properties match your criteria.</p>
                )}
            </div>
        </section>
    );
};

export default BrisbanePage;
