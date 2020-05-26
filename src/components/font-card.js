import React from "react";

const FontCard = ({name, url, description, image, price}) => (
    <div className="card">
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <a className="button" href={url} target="_blank" rel="noopener noreferrer">View Font</a>
    </div>
)

export default FontCard;