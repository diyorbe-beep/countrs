let Api = 'https://restcountries.com/v3.1/all'
const countriesRow = document.querySelector('.countries_row')


async function senRequest() {
      try {
            let res = await fetch(Api)
            if (!res.ok) {
                  throw new Error('Error')
            }
            let data = await res.json()
            makeCountry(data)
      } catch (error) {
            console.log(error.message);
      }
}

senRequest()

function makeCountry(countries) {
      countries.forEach(country => {
      console.log(country);
            let a = document.createElement('a')
      a.classList.add('country')
      a.innerHTML = `
      <img class="country_img" src="${country.flags.png}" alt="">
      <div class="info">
      <h1 class="country_title">${country.name.common}</h1>
      <ul class="country_list">
      <li class="country_list_item">Population: <span>${country.population}</span></li>
      <li class="country_list_item">Region: <span>${country.region}</span></li>
      <li class="country_list_item">Capital: <span>Berlin</span></li>
      </ul>
      </div>
      `
      countriesRow.appendChild(a)
      });
}