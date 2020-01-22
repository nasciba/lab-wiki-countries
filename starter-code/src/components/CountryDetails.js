import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries.json';



class CountryDetails extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.match;
        const country = this.getCountry(params.id);
        
        this.state = {
            countries: countries,
            country: country,
        };

    }

    getCountry = (id) => {
        const theCountry = oneCountry => {
            return oneCountry.cca3 === id;
        }
        return countries.find(theCountry)
    };

    componentDidMount() {
        const { params } = this.props.match;
        const newCountry = this.getCountry(params.id);
        this.setState({country : newCountry});
        
    }

    render() {
        console.log('oi')
        const countryName = this.state.country.name && this.state.country.name.common 

        return (
            <div>
            <div>
            <div className="col-7">
                <h1>{this.state.country.flag} {countryName} </h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{this.state.country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{this.state.country.area} km
                    <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>{this.state.country.borders ? this.state.country.borders.map((border, index) => {
                                    return (<li key={index}><Link to={`/countrydetail/${border}`}>{border}</Link></li>)
                                    }) : null }
                                    
       

                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
        )
    }
}

export default CountryDetails;