import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

import CreeseLogo from '/assets/SocialSharingImage.png';
import CreeseFavicon from '/assets/CPIconWhite.png';

const DOMAIN = "https://www.creeseproperty.com";
const MAIN_KEYWORDS = "property management, property, properties";

const DEFAULT_IMAGE_CARD = "https://www.creeseproperty.com/assets//SocialSharingImage.png";
const DEFAULT_TITLE = "Creese Property";
const DEFAULT_DESCRIPTION = "Creese Property: Your expert partner in residential property management, buyer’s agency, and consultancy.";

const FAVICON_SOURCE = "https://www.creeseproperty.com/assets/CPIconWhite.png";

const POSTFIX_TITLE = " | Creese Property";

function Helmet({
  title,
  description,
  link,
  keywords,
  imageCard,
  addPostfixTitle = false,
  noIndex = false,
  children = null,
}) {
  let metaTitle;

  if (addPostfixTitle) {
    metaTitle = title + POSTFIX_TITLE;
  } else {
    metaTitle = title;
  }

  const metaDesc = description ?? DEFAULT_DESCRIPTION;
  const metaLink = DOMAIN + link;

  const metaKeywords = keywords.length
    ? MAIN_KEYWORDS + ", " + keywords
    : MAIN_KEYWORDS;

  let metaImageCard;

  if (imageCard) {
    if (imageCard.startsWith("https")) {
      metaImageCard = imageCard;
    } else {
      metaImageCard = DOMAIN + imageCard;
    }
  } else {
    metaImageCard = DEFAULT_IMAGE_CARD;
  }

  const metaRobots = noIndex ? "noindex, nofollow" : "index, follow";

  return (
    <ReactHelmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={metaLink} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />
      <link rel="icon" href={FAVICON_SOURCE} />

      {/* OG Tags */}
      <meta property="og:url" content={metaLink} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImageCard} />

      {/* Referrer Policy */}
      <meta name="referrer" content="origin-when-crossorigin" />

      {children}
    </ReactHelmet>
  );
}

Helmet.defaultProps = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  imageCard: DEFAULT_IMAGE_CARD,
  addPostfixTitle: false,
  noIndex: false,
  children: null,
  keywords: "",
};

Helmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  imageCard: PropTypes.string,
  addPostfixTitle: PropTypes.bool,
  noIndex: PropTypes.bool,
  children: PropTypes.node,
};

export default Helmet;