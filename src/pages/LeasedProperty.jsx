import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet.jsx';

import './NotFoundPage.css';

function LeasedPropertyPage() {

    return (
        <>
            <Helmet
                title="Leased Property"
                link="/leased-property"
                addPostfixTitle
                noIndex
            >
            </Helmet>
            <div className='notfound-background'>
                <h1 className='leasedproperty-header'>This property has been leased.</h1>
                <p>Sorry, this property isn’t available. <br/>Have a look at our current available properties.</p>
                <Link to="/rentals" className='leased-button' style={{ textDecoration: 'underline' }}>Click here to see our available properties</Link>
            </div>
        </>
    );
}

export default LeasedPropertyPage;