let Api = 'https://restcountries.com/v3.1/'
const countriesRow = document.querySelector('.countries_row')


async function senRequest(link) {
      try {
            let res = await fetch(Api + link)
            if (!res.ok) {
                  throw new Error('Error')
            }
            let data = await res.json()
            makeCountry(data)
      } catch (error) {
            console.log(error.message);
      }
}


senRequest('all')

function makeCountry(countries) {
      countriesRow.innerHTML = ' '
      countries.forEach(country => {
            console.log(country);
            let capitalCounty
            capitalCounty = country.capital ? country.capital.join(' / ') : '<span style="color: red;">No Capital</span></li>'
            console.log(country.capital);
            let a = document.createElement('a')
            a.href = `./countrs.html?name=${country.name.common}`
            a.classList.add('country')
            a.innerHTML = `
      <img class="country_img" src="${country.flags.png}" alt="">
      <div class="info">
      <h1 class="country_title">${country.name.common}</h1>
      <ul class="country_list">
      <li class="country_list_item">Population: <span>${country.population}</span></li>
      <li class="country_list_item">Region: <span>${country.region}</span></li>
      <li class="country_list_item">Capital: <span>${capitalCounty}</span></li>
      </ul>
      </div>
      `
            countriesRow.appendChild(a)
      });
}


const select = document.querySelector('.select')

select.addEventListener('change', () => {
      senRequest(`region/${select.value}`)
      if (select.value == 'all') {
            senRequest('all')
      }
})

const searchInput = document.querySelector('.search_input')

searchInput.addEventListener('input', () => {
      if (searchInput.value) {
            senRequest(`name/${searchInput.value}`)
      } else {
            senRequest('all')
      }
})