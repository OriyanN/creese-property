import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './NotFoundPage.css';

function NotFoundPage() {

    return (
        <>
            <Helmet>
                <title>404</title>
                <meta name="description" content="404 page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <link rel="canonical" href="*" />
            </Helmet>
            <div className='notfound-background'>
                <h1 className='notfound-header'>404</h1>
                <p>Sorry, this page isn’t available. <br/>The link you followed may be broken, <br/>or the page may have been removed.</p>
                <Link href="/" className='gallery-button' style={{ textDecoration: 'underline' }}>To Creese Property Home</Link>
            </div>
        </>
    );
}

export default NotFoundPage;