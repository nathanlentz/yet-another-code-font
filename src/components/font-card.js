import React from "react";
import PropTypes from "prop-types";

import { Card } from './styles';

const FontCard = ({name, url, description, image, price}) => (
    <Card>
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
    </Card>
)

FontCard.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string
};

export default FontCard;