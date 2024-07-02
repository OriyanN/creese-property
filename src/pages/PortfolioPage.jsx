import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LazyImage from '../components/LazyImage';
import Helmet from '../components/Helmet.jsx';

import portfolioImage from '/assets/portfolio-image.jpg';

import "./PortfolioPage.css"

import GoldCoastPropertiesData from '../pages/GoldCoast/GoldCoastPropertiesData';
import BrisbanePropertiesData from '../pages/Brisbane/BrisbanePropertiesData';
import IpswichPropertiesData from '../pages/Ipswich/IpswichPropertiesData';
import LoganPropertiesData from '../pages/Logan/LoganPropertiesData';

function PortfolioPage() {
    // const data = [
        // { id: 1, image: bri1, address: '1003/66 Manning Street, South Brisbane', link: '/locations/brisbane/properties/bri1' },
        // { id: 2, image: bri2, address: '402/22 Station Street, Nundah', link: '/locations/brisbane/properties/bri2' },
        // { id: 3, image: gc1, address: '4/48 Macadie Way, Merrimac', link: '/locations/gold-coast/properties/gc1' },
        // { id: 4, image: gc2, address: '128 Salerno Street, Surfers Paradise', link: '/locations/gold-coast/properties/gc2' },
        // { id: 5, image: ips1, address: '22 Kingsmill Road, Coalfalls', link: '/locations/ipswich/properties/ips1' },
        // { id: 6, image: ips2, address: '2/187 WARWICK ROAD, Churchill', link: '/locations/ipswich/properties/ips2' },
    // ];

    const allPropertiesData = [
        // ...GoldCoastPropertiesData.map(item => ({ ...item, location: 'Gold Coast' })),
        // ...BrisbanePropertiesData.map(item => ({ ...item, location: 'Brisbane' })),
        ...IpswichPropertiesData.map(item => ({ ...item, location: 'Ipswich' })),
        // ...LoganPropertiesData.map(item => ({ ...item, location: 'Logan' })),
    ];

    return (
        <> 
            <Helmet
                title="Portfolio"
                description="Browse Creese Property's portfolio of expertly managed residential properties."
                link="/portfolio"
                addPostfixTitle
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@graph": [
                          {
                            "@type": "BreadcrumbList",
                            "@id": "https://www.creeseproperty.com/#breadcrumb",
                            "itemListElement": [
                              {
                                "@type": "ListItem",
                                "name": "Home",
                                "position": "1",
                                "item": "https://www.creeseproperty.com/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "About",
                                "position": "2",
                                "item": "https://www.creeseproperty.com/about/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "Services",
                                "position": "3",
                                "item": "https://www.creeseproperty.com/services/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "Portfolio",
                                "position": "4",
                                "item": "https://www.creeseproperty.com/portfolio/"
                              }
                            ]
                          }
                        ]
                    })}
                </script>
            </Helmet>
            <ScrollToTop />
            <div>
                <div className="contact-about-header">
                    <img src={portfolioImage} alt="Creese Property Portfolio" />
                    <h1>Portfolio</h1>
                    <div className="overlay"></div>
                </div>
                <div className='portfolio-text'>
                    <h2>A Curated Portfolio of Our Current Properties Under Management</h2>
                </div>
                <div className="images-container images-container-portfolio">
                    {allPropertiesData.map((property) => (
                        <div key={property.id} className="image-item-container">
                            <div className="availability-banner">
                                {property.availability}
                            </div>
                            <Link to={`/rentals/${property.location.toLowerCase().replace(' ', '-')}/properties/${property.id}`}>
                                <LazyImage src={property.images[0]} alt={`Property ${property.id}`} className="image-item" />
                            </Link>
                            <div className="location-details">
                                <h4>{property.address}</h4>
                                <div className="locations-page-properties-details">
                                    <p>{property.beds} Bed - {property.baths} Bath - {property.car} Car</p>
                                    <p className='property-bottom-price'>${property.price}/week</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default PortfolioPage;