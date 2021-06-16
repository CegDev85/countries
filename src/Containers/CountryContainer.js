import React, { useEffect, useState } from 'react' 
import CountryList from '../Components/CountryList';

const CountryContainer = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    return (
        <div>
        <CountryList countries={countries}/>
        </div>
        
    )
}


export default CountryContainer;
