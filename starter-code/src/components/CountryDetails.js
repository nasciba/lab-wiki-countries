import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries.json';



class CountryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "",
        };

    }

    getCountry = async (id) => {
        const countryID = country => {
            return country.cca3 === id;
        }
        const theCountry = countries.find(countryID);
        await this.setState({ country: theCountry })

    };

    componentDidMount() {
        const { params } = this.props.match;
        this.getCountry(params.id);

    }

    componentDidUpdate(prevProps) {
        const { params } = this.props.match;
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.getCountry(params.id);
        }
    }

    render() {
        const countryName = this.state.country.name && this.state.country.name.common
        const countryBorders = this.state.country.borders && this.state.country.borders.length

        return (
            <React.Fragment>
                    <div className="col-7">
                        <h1>{this.state.country.flag} {countryName} </h1>
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '50%' }}>Capital</td>
                                    <td>{this.state.country.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>{this.state.country.area} km<sup>2</sup>
                                    </td>
                                </tr>

                                {countryBorders ?
                                    <tr>
                                        <td>Borders</td>
                                        <td>
                                            <ul> {this.state.country.borders.map((border, index) => {
                                                return (<li key={index}><Link to={`/countrydetail/${border}`}>{border}</Link></li>)
                                            })}
                                            </ul>
                                        </td>

                                    </tr>
                                    : null
                                }
                            </tbody>
                        </table>
                    </div>
            </React.Fragment>
        )
    }
}

export default CountryDetails;