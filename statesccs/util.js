console.log('I am from js')
// callAPI();


async function getData() 
        {
            console.log('I am inside async  fun js --')
            //await the response of the fetch call  
            let country = document.getElementById('countryName').value;
            console.log(country)
            let urlValue="https://restcountries.eu/rest/v2/name/";
            // let country="Australia"
            let paramValue="?fullText=true"
            urlValue=urlValue+country+paramValue;
        // let response = await fetch('https://restcountries.eu/rest/v2/name/sweden?fullText=true')
        let response = await fetch(urlValue)
           .catch(err => console.error('Caught error: ', err))        
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }
//call getData function
// getData()
// .then(data => console.log(data));//log the data
function displayCapital(){
let capitalCity;
 getData()
 .then((data)=>{
    //  console.log(data.length)
    // console.log(data)  
     data.forEach(country => {
         capitalCity=country.capital;         
    document.getElementById('capitalName').value=capitalCity;
     });    
   
 })
 .catch(()=>{
     alert("Invalid Input")
 })
}