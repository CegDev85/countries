import React from 'react' 

const CountryDetail = ({country}) => {
    return(
        <div>
            <h3>{country.name}</h3>
            <p>Languages: {country.languages.name}</p>
            <p>Flag: {country.flag}</p>
        </div>
    )
}





export default CountryDetail;