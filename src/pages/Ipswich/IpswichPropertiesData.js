// import * as TysonStreet9 from '../../../public/assets/Ipswich/832-9-tyson-street';
import * as EndeavourCres7 from '../../../public/assets/Ipswich/7-endevour-cresent';
import * as AspireStreet26 from '../../../public/assets/Ipswich/26-aspire-street';
import * as AspireStreet27 from '../../../public/assets/Ipswich/27-aspire-street';

const IpswichPropertiesData = [
  // {
  //   id: '9-tyson-street',
  //   images: Object.values(TysonStreet9),
  //   address: '9 Tyson Street, Whiterock Ripley',
  //   price: 750,
  //   beds: 4,
  //   baths: 1,
  //   car: 2,
  //   features: ['Air conditioning', 'Roller Blinds', 'Mirrored Robes', 'Quality Carpets', 'Deck', 'Driveway', 'Wall-hung Vanities', 'Outdoor area', 'Stone Benchtops'],
  //   description: ["New Built 4 Bedroom Home with quality throughout. Deebing Heights is a large suburb encompassing the area from the eponymous hills surrounding Deebing Creek in the north of the suburb through to the lower foothills of the Flinders Peak Group in the south. From the Grampian Hills it is possible, on a clear day, to see the Brisbane skyline and the Pacific Ocean.", "", "Features:", "- 4 Spacious bedrooms", "- 2 Modern bathrooms with Wall hung vanities with above counter basins.", "- 2 Separate living areas for maximum comfort", "- 2 Car garage with ample storage", "- Kitchen with Stainless steel cooker & Gooseneck tap wear", "- Stone bench tops to Kitchen and Laundry","", "Additional Features:", "- blinds throughout", "- Beautifully landscaped gardens", "", "This brand-new home won't last long. Contact us today to arrange a viewing!"],
  //   lat: -27.416270,
  //   lng: 153.032310
  // },
  // {
  //   id: '7-endevour-cresent',
  //   images: Object.values(EndeavourCres7),
  //   address: '7 Endeavour Cres, Pallara',
  //   price: 835,
  //   beds: 4,
  //   baths: 2.5,
  //   car: 2,
  //   // availability: 'Available 25 Aug',
  //   inspectionStartTime: '2024-07-01T08:00:00Z',
  //   inspectionEndTime: '2024-07-01T08:30:00Z',
  //   features: ['Air conditioning', 'Roller Blinds', 'Quality Carpets', 'Driveway', 'Outdoor area', 'Stone Benchtops', 'Dishwasher', 'Double Garage', 'Built-in wardrobes'],
  //   description: ["Discover your dream home at Hideaway Estate! This magnificent 4-bedroom, 2-bathrooms PLUS Powder Room residence offers the perfect blend of luxury and comfort.", "", "Downstairs:", "- Entry", "- Family room", "- Separate dining room", "- Modern kitchen with Smeg dishwasher, Smeg Oven and Cooktop", "- Walk In Pantry", "- Laundry", "- Powder room with Frameless Mirrors", "- Alfresco area for outdoor entertaining or for a relaxing weekend", "- Spacious garage", "", "Upstairs:", "- 4 bedrooms, including:", "- Master bedroom with walk-in robe and ensuite", "- Frameless Mirrors to Ensuite and Main Bathroom", "- Sitting area at the top of the stairs", "- Main Bathroom with Bath", "- Separate toilet", "- Study nook", "", "Additional Features:", "- Ducted air conditioning throughout for year-round comfort", "Brand new community, close to Pallara Childcare, Pallara Early Learning Centre, Pallara Park, Pallara State School, St John's Anglican College, Forest Lake State High School, Pallara Shopping Village with Coles, Public Transport. The suburb features local parks with playgrounds, BBQ areas, and sports fields, providing opportunities for relaxation and family gatherings. Additionally, nearby natural reserves such as Karawatha Forest offer residents walking trails and wildlife viewing experiences", "Approximately 30 minutes to Brisbane CBD and 55 minutes to Surfers Paradise", "Don’t miss the opportunity to make it yours! Contact us today to arrange a viewing."],
  //   lat: -27.619210,
  //   lng: 152.996900
  // },
  // {
  //   id: '26-aspire-street',
  //   images: Object.values(AspireStreet26),
  //   address: '26 Aspire Street, Ripley',
  //   price: 650,
  //   beds: 4,
  //   baths: 2,
  //   car: 2,
  //   // availability: 'Available Now',
  //   features: ['Air conditioning', 'Fully fenced', 'Ensuite', 'Driveway', 'Outdoor area', 'Hot water service', 'Dishwasher', 'Double garage', 'Built-in wardrobes'],
  //   description: ["Are you looking for easy style living plus privacy and space? This stylish low-maintenance brand new home ticks all the boxes.", "", "Comprising 4 bedrooms and open plan living, dining and kitchen this home also includes a separate media room. Kitchen with ample storage, cooktop, oven and dishwasher. Living areas are tiled and flow out to a spacious Alfresco area, perfect for entertaining or relaxing after a long day. Split system air-conditioning provides year-round comfort.", "", "Features you will love:", "- Master bedroom with Walk In Robe and en-suite", "- 3 additional bedrooms all have built in wardrobes", "- Great size family bathroom with shower, separate bath plus toilet", "- Double garage", "- Low maintenance tropical garden would suit busy families or executive couple", "", "Ripley is a family friendly suburb, so close to all Amenities, Shops, Cafés , Hairdressers and Schools, also there is easy access to the M1 for a quick commute to either Brisbane or the Gold Coast.", "", "4.5 kms Ripley Town Centre", "6.5 kms Ripley Valley State School", "6.0 kms Ripley Valley State Secondary College", "6.4 kms Ripley Satellite Hospital", "7.6 kms to Willowtree Park Flinders View", "","Don't miss out on this fantastic opportunity to live in a brand-new home in Ripley's latest estate. Move in and enjoy the lifestyle you deserve!"],
  //   lat: -27.658630,
  //   lng: 152.774567
  // },
  // {
  //   id: '27-aspire-street',
  //   images: Object.values(AspireStreet27),
  //   address: '27 Aspire Street, Ripley',
  //   price: 650,
  //   beds: 4,
  //   baths: 2,
  //   car: 2,
  //   // availability: 'Available Now',
  //   features: ['Air conditioning', 'Fully Fenced', 'Ensuite', 'Secre Parking', 'Outdoor area', 'Hot Water Service', 'Dishwasher', 'Double Garage', 'Built-in wardrobes'],
  //   description: ["Located in the Bellevue Estate, this beautifully presented 4 bedroom Brand New family home is conveniently located.", "", "Situated in a leafy street, the front and back yards are designed for both beauty and ease of maintenance, enhancing the overall appeal of the home. This home promises a lifestyle that is both stylish and functional.", "", "Features you will love:", "- Open Plan Living", "- Second Living Area", "- Spacious Kitchen With Plenty Of Bench Space & Gas Cook Top", "- Dishwasher", "- Air Conditioning In Living Area And Master Bedroom", "Master Bedroom With Walk-in robe", "Built-in Robes In Bedrooms 2, 3, and 4", "Ceiling Fans Throughout", "Media Room", "Covered Alfresco Area With Private Fenced Backyard", "Double garage", "Landscaped Gardens", "", "Ripley is a family friendly suburb, so close to all Amenities, Shops, Cafés , Hairdressers and Schools, also there is easy access to the M1 for a quick commute to either Brisbane or the Gold Coast.", "", "4.5 kms Ripley Town Centre", "6.5 kms Ripley Valley State School", "6.0 kms Ripley Valley State Secondary College", "6.4 kms Ripley Satellite Hospital", "7.6 kms to Willowtree Park Flinders View", "","Don't miss out on this fantastic opportunity to live in a brand-new home in Ripley's latest estate. Move in and enjoy the lifestyle you deserve!"],
  //   lat: -27.658630,
  //   lng: 152.774570
  // },
];
  
export default IpswichPropertiesData;