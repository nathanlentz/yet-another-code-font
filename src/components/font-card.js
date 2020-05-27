import React from "react";

const FontCard = ({name, url, description, image, price}) => (
    <div className="card">
        <div className="card-content" style={{ height: '100%', position: 'relative' }}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p style={{ fontWeight: '600' }}>Price: {price}</p>
            <a className="button" href={url} target="_blank" rel="noopener noreferrer" style={{
                position: 'absolute',
                bottom: '0px'
            }}>
                View Font
            </a>
        </div>
    </div>
)

export default FontCard;