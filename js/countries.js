const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then( response => response.json())
    .then( data => displayCountries(data))
}

const displayCountries = countries => {
    // for( const country of countries){
    //     console.log(country)
    // }

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country)
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <h3>Population: ${country.population}</h3>
        <h3>Office Day: ${country.startOfWeek}</h3>
        <h3>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h3>
        <button onclick="loadCountryDetail(${country.cca2})" >Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })

}

loadCountries();

const loadCountryDetail = () => {
    console.log('Get Country Details')
}