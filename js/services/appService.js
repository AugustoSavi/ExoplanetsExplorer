angular.module('exoplanets').factory('exoplanetsApi', function($http){

    var _getExoplanets = function(){
        $http.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,ra,dec&order=dec&format=json")
    }
    return{
        getExoplanets:_getExoplanets
    };
});
