import React, { Component } from 'react';
import '../Styles/home.css';
import axios from 'axios';

import Wallpaper from './Wallpaper';
import QuickSearches from './QuickSearches';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            locations: [],
            mealtypes: []
        }; 
    }

    componentDidMount() {
        axios.get(`${api_url}/api/getLocations`)
            .then(result => {
                this.setState({
                    locations: result.data.locations
                });
            })
            .catch(error => {
                console.log(error);
            });

        axios.get(`${api_url}/api/getMealTypes`)
            .then(result => {
                this.setState({
                    mealtypes: result.data.mealtypes
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { locations, mealtypes } = this.state;
        return (
            <React.Fragment>
                <Wallpaper cities={locations} />
                <QuickSearches quicksearches={mealtypes} />
            </React.Fragment>
        );
    }
}

export default Home;