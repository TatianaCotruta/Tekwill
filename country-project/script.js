const createCountryContainer = (country) => {
    //console.log(country);
    const container = document.createElement('div');
    container.className = 'country-container'
    
    //counntry.flag.png
    const img = document.createElement('img');
    img.width = "300";
    img.height ="150";
    img.setAttribute('src', country.flags.png);
    img.setAttribute('alt', country.flags.alt);
    container.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = 'Name: ' + country.name.common;
    container.appendChild(name);

    const capital = document.createElement('h3');
    capital.textContent = 'Capital: '+ country.capital;
    container.appendChild(capital);

    const continent = document.createElement('h3');
    continent.textContent = 'Continent: '+ country.continent;
    container.appendChild(continent);

    const population = document.createElement('h5');
    population.textContent = 'Population: '+ country.population;
    container.appendChild(population);
    
    if (country.currencies) {
        const currencyElement = document.createElement('h5');
        const currencyKeys = Object.keys(country.currencies);
        const currensy = currencyKeys[0];
        currencyElement.textContent = 'Currency: ' + currencyKeys[0] + ',' + country.currencies[currensy].name + ',' + country.currencies[currencyKeys].symbol;
        container.appendChild(currencyElement);
    }
    return container;
}


let countriesList = [];

const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        countriesList = countries;
        const countriesContainer = document.getElementById('countries');
        
        countries.forEach((country) => {
            const countryContainer = createCountryContainer(country);
            countriesContainer.appendChild(countryContainer);
        })
    })
    // .catch(error => console.log(error));
}

fetchData();


const showAll = () => {
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = "";

    const searchInput = document.getElementById('search-input');
    searchInput.value = '';

    fetchData();
    handleInput();
}


const searchCountry = () => {

    const searchInput = document.getElementById('search-input');
    const countryName = searchInput.value.trim();
    // if (countryName !== '') {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => response.json())
            .then(countries => {
                const countriesContainer = document.getElementById('countries');
                countriesContainer.innerHTML = "";

                countries.forEach((country) => {
                    const countryContainer = createCountryContainer(country);
                    countriesContainer.appendChild(countryContainer);
                })
        })
    // } else {
    //     alert('Please enter a country name');
    // }

}

const handleInput = () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    searchButton.disabled = !searchInput.value.trim();
}

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydouwn', (event)=> {
    // console.log(event.key);
    if (event.key === 'Enter') {
        searchCountry();
    }
})

handleInput();

// setTimeout(()=> console.log(countriesList), 1000);

const sortCountries = (sortParam) => {
    switch(sortParam) {
        case 'sort':
            return countriesList;
        case 'population':
            return countriesList.sort((a, b)=> a.population - b.population);
        case 'area':
            return countriesList.sort((a, b)=> a.area - b.area);
        case 'capital':
            return countriesList.sort((a, b)=> a.capital.localeCompare(b.capital));
        case 'continent':
            return countriesList.sort((a, b)=> a.continent.localeCompare(b.continent));
        case 'currency':
            return countriesList.sort((a, b)=> a.currency - b.currency);
        case 'name':
        default:
            return countriesList.sort((a, b)=> a.name.common.localeCompare(b.name.common));
    }
}


const sortSelect = document.getElementById('sort-select');
sortSelect.addEventListener('change', ()=> {
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = '';
    
    const sortedCountries = sortCountries(sortSelect.value);
    sortedCountries.forEach((country) => {
        const countryContainer = createCountryContainer(country);
        countriesContainer.appendChild(countryContainer);
    })
})