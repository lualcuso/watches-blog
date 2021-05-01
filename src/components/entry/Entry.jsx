import React from 'react';
import PropTypes from 'prop-types';

import './entry.scss';

function Entry(props) {
    const {title, description, 
        urlToImage, publishedAt, 
        author, url} = props;

    const articleDate = new Date(publishedAt);
    
    return (
        <div className='entry' >
            <div className='description'>
                <a href={url} ><h3>{title}</h3></a>
                <p>{description}</p>
                <div className='data'>
                    <p>Published by {author || 'Anonymous'}, {articleDate.toDateString()}</p>
                </div>
            </div>
            <div className='image'>
                <img src={urlToImage} alt={title}/>
            </div>

        </div>
    )
}

Entry.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
};

export default Entry;