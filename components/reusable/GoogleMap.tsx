import React from 'react';

const GoogleMapEmbed = ({ location, zoom = 14, width = "100%", height = "100%" }: any) => {
    // Encode the location for URL
    const encodedLocation = encodeURIComponent(location);

    // Construct the Google Maps iframe URL
    const iframeSrc = `https://www.google.com/maps/embed/v1/place?q=${encodedLocation}&key=YOUR_GOOGLE_MAPS_API_KEY&maptype=roadmap&zoom=${zoom}&style=element:geometry%7Ccolor:0x212121%7Cfill-color:0x000000%7Cfill-opacity:1%7Cstroke-color:0x212121%7Cstroke-opacity:1%7Cstroke-width:1%7Cstroke-linecap:butt%7Cstroke-linejoin:bevel%7Cvisibility:simplified`;

    return (
        <iframe
            width={width}
            height={height}
            src={iframeSrc}
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            title="Google Maps"
        ></iframe>
    );
};

export default GoogleMapEmbed;
