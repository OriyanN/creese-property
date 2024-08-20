import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet.jsx';

import './NotFoundPage.css';

function NotFoundPage() {

    return (
        <>
            <Helmet
                title="404"
                link="*"
                addPostfixTitle
                noIndex
            >
            </Helmet>
            <div className='notfound-background'>
                <h1 className='notfound-header'>404</h1>
                <p>Sorry, this page isn’t available. <br/>The link you followed may be broken, <br/>or the page may have been removed.</p>
                <Link to="/" className='gallery-button' style={{ textDecoration: 'underline' }}>To Creese Property Home</Link>
            </div>
        </>
    );
}

export default NotFoundPage;