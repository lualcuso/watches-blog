import React from 'react';
import api from '../../utils/api';
import { ENTRIES_URL } from '../../constants';

import Entry from '../entry/Entry';

class WebEntriesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { entries: [] };
    }

    async componentDidMount() {
        const response = await api.get(ENTRIES_URL);
        this.setState({
            entries: response.data.articles
        });
    }

    render() {
        const { entries } = this.state;
        return (
            <div>
                {entries.map((entry, index) => {
                    return <Entry key={index} {...entry} />
                })}
            </div>
        );
    }
}

export default WebEntriesList;