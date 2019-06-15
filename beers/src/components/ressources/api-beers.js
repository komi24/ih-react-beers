import axios from 'axios';

const ApiBeer = {
    getBeers: function(){
        return axios.get('http://localhost:3001/beers')
        .then(res=>res.data)
    },
    getRandomBeer: function(){
        return axios.get('http://localhost:3001/beers/random')
        .then(res=>res.data)
    },
    addNewBeer: function(beer){
        return axios.post('http://localhost:3001/beers/new', beer)
        .then(res=>res.data)
    }
}

export default ApiBeer