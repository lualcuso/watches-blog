import React from 'react';
import PropTypes from 'prop-types';

import localStorageUtil from '../../utils/localstorage';

import './entry.scss';

function Entry(props) {
    const { entry, localEntry = false } = props

    const articleDate = new Date(entry.publishedAt);
    
    return (
        <div className='entry' >
            <div className='description'>
                <a href={entry.url} ><h3>{entry.title}</h3></a>
                <p>{entry.description}</p>
                <div className='data'>
                    <p>Published by {entry.author || 'Anonymous'}, {articleDate.toDateString()}</p>
                </div>
                {!localEntry && <div className="save-article">
                    <button onClick={() => {
                        localStorageUtil.post(entry);
                    }}>Save Article Locally</button>
                </div>}
            </div>
            <div className='image'>
                <img src={entry.urlToImage} alt={entry.title}/>
            </div>
            

        </div>
    )
}

Entry.propTypes = {
    entry: PropTypes.object,
    localEntry: PropTypes.bool
};

export default Entry;