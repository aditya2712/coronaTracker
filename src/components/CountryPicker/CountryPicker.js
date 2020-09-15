import React, { useState, useEffect } from 'react';

const CountryPicker= ({onCountryChange}) => {
    const [countries,setCountries] = useState([]);

    useEffect( () => {
        fetch('https://covid19.mathdro.id/api/countries')
        .then(response => response.json())
        .then(data => setCountries(data.countries.map(country => country.name))) 
    },[])

    return(
        <div>
            <form>
                <label className='f3 mh3' htmlFor="countries">Select Country :</label>
                <select onChange={onCountryChange} name="countries" id="countries" className= 'outline-0 mv5 pa2 tc br4'>
                    <option value="Global">Global</option>
                    {countries.map( (country,i) => <option key={i}
                    value= {country}>{country}</option>)}
                </select>
            </form>
        </div>
    )
}

export default CountryPicker;