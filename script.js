//XHTML
const getCountries = () =>{
    const xhr=new XMLHttpRequest()
  //data - endpoint (URL which contains the json data)
  xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
  xhr.responeType = 'json';
  xhr.onload = () => {
    const data = xhr.response;


    let result = (JSON.parse(data))
    .map((Country) => ({
    Name:Country.name,
    Region: Country.region,
    Subregion:Country.subregion, 
    Population: Country.population
    }));
    

    console.log(result);
    
  }
  xhr.send()
}

getCountries()





