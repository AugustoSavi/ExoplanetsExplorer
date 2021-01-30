# NASAExoplanetQuery

https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json

const exoplanets = await fetch("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json",
{'Access-Control-Request-Method': '*'})
.then(async (response)=>{
    if(response.ok){return response.json();}
})
.then(async (responseObject)=> {return responseObject;})
