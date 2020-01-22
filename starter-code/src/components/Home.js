import React, { Component } from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <div className="list-group">
                    {countries.map((item, index) => {
                        return (

                            <Link key={index} to={`/countrydetail/${item.cca3}`} className="list-group-item list-group-item-action">{item.flag} {item.name.common}</Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home

