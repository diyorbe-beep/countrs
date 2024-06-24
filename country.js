const params = new URLSearchParams(window.location.search)
const countryName = params.get('name')
const countryInfoRow = document.querySelector('.country-info-row')

let URL = 'https://restcountries.com/v3.1/name/'

async function getCountry(link) {
      try {
            let res = await fetch(link + countryName)
            let data = await res.json()
            let country = data[0]
            makeCountryItem(country);
      } catch (err) {
            console.log(err);
      }
}

getCountry(URL)

function makeCountryItem(countyrItem) {
      countryInfoRow.innerHTML = ' '
      countryInfoRow.innerHTML = `
                              <div class="image">
                              <img src="${countyrItem.flags.png}" alt="">
                        </div>
                        <div class="info">
                              <h1 class="country-info-name">Belgium</h1>
                              <ul class="country-info-list">
                                    <li class="country-info-list_istem"><strong>Native Name:</strong> België</li>
                                    <li class="country-info-list_istem"><strong>Population:</strong> België</li>
                                    <li class="country-info-list_istem"><strong>Region: </strong>België</li>
                                    <li class="country-info-list_istem"><strong>Sub Region: </strong>België</li>
                                    <li class="country-info-list_istem"><strong>Capital: </strong>België</li>
                                    <li class="country-info-list_istem"><strong>Top Level Domain: </strong>België</li>
                                    <li class="country-info-list_istem"><strong>Currencies: </strong>België</li>
                                    <li class="country-info-list_istem"><strong>Languages: </strong>België</li>
                              </ul>
                              <div class="borders">
                                    <p class="border-title">Border Countries: </p>
                                    <ul class="border-list">
                                          <li><a href="">France</a></li>
                                          <li><a href="">Germany</a></li>
                                          <li><a href="">Netherlands</a></li>
                                    </ul>
                              </div>
                        </div>
      `

}