import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LazyImage from '../components/LazyImage';
import Helmet from '../components/Helmet.jsx';

import portfolioImage from '/assets/portfolio-image.jpg';

import "./PortfolioPage.css"

import GoldCoastPropertiesDataPortfolio from '../pages/GoldCoast/GoldCoastPropertiesDataPortfolio.js'
import BrisbanePropertiesDataPortfolio from '../pages/Brisbane/BrisbanePropertiesDataPortfolio.js';
import IpswichPropertiesDataPortfolio from '../pages/Ipswich/IpswichPropertiesDataPortfolio.js';
import MoretonBayPropertiesDataPortfolio from '../pages/MoretonBay/MoretonBayPropertiesDataPortfolio.js';

function PortfolioPage() {
    const allPropertiesData = [
        ...GoldCoastPropertiesDataPortfolio.map(item => ({ ...item, location: 'Gold Coast' })),
        ...BrisbanePropertiesDataPortfolio.map(item => ({ ...item, location: 'Brisbane' })),
        ...IpswichPropertiesDataPortfolio.map(item => ({ ...item, location: 'Ipswich' })),
        ...MoretonBayPropertiesDataPortfolio.map(item => ({ ...item, location: 'Moreton Bay' })),
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
                            "@id": "https://creeseproperty.com/#breadcrumb",
                            "itemListElement": [
                              {
                                "@type": "ListItem",
                                "name": "Home",
                                "position": "1",
                                "item": "https://creeseproperty.com/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "About",
                                "position": "2",
                                "item": "https://creeseproperty.com/about/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "Services",
                                "position": "3",
                                "item": "https://creeseproperty.com/services/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "Portfolio",
                                "position": "4",
                                "item": "https://creeseproperty.com/portfolio/"
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
                            <Link to={`/portfolio/${property.location.toLowerCase().replace(' ', '-')}/properties/${property.id}`}>
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