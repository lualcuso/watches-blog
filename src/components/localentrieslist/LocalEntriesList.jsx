import React from 'react';
import localStorageUtil from '../../utils/localstorage';

import Entry from '../entry/Entry';

import './localentrieslist.scss'

class LocalEntriesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            entries: [] 
        };
    }

    componentDidMount() {
        const localEntries = localStorageUtil.get();
        this.setState({
            entries: localEntries || []
        });
    }

    render() {
        const { entries } = this.state;
        return (
            entries.length > 0 ? <div className='web-entries-list'>
                {entries.map((entry, index) => {
                    return <Entry key={index} localEntry={true} entry={entry} />
                })}
            </div> : <p style={{textAlign: 'center'}}>No entries saved locally.</p>
        );
    }
}

export default LocalEntriesList;