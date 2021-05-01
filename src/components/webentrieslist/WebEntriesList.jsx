import React from 'react';
import api from '../../utils/api';
import { ENTRIES_URL } from '../../constants';

import Entry from '../entry/Entry';

import './webentrieslist.scss'

class WebEntriesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            entries: [],
            currentPage: 1  
        };
    }

    componentDidMount() {
        this.getEntries();
    }

    async getEntries () {
        const { currentPage, entries } = this.state;
        const response = await api.get(ENTRIES_URL + currentPage);
        this.setState({
            entries: currentPage === 1? response.data.articles : entries.concat(response.data.articles)
        });
    }

    render() {
        const { entries } = this.state;
        return (
            <div className='web-entries-list'>
                {entries.map((entry, index) => {
                    return <Entry key={index} {...entry} />
                })}
                {entries.length && <div className='load-more'>
                    <button onClick={() => {
                        this.setState({
                            currentPage: this.state.currentPage + 1
                        }, () => {
                            this.getEntries()
                        })
                    }}>Load More Articules</button>
                </div>}
            </div>
        );
    }
}

export default WebEntriesList;