const params = new URLSearchParams(window.location.search)
const countryName = params.get('name')

let URL = 'https://restcountries.com/v3.1/name/'

async function getCountry(link){
      try{
            let res = await fetch(link+countryName)
            let data = await req.json()
      }catch(err){
            console.log(err);
      }
}