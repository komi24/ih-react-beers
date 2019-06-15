import React from 'react';
import BeerCard from '../utils/BeerCard';
import apiBeers from '../ressources/api-beers';


class RandomBeer extends React.Component {
    state = {
        randomBeer: {}
    }

    componentDidMount () {
        apiBeers.getRandomBeer()
        .then(data => {
            this.setState({randomBeer: data})
        })
    }
    render () {
        return (
            <div className="beer-random-container">
                <h1>RandomBeer</h1>
                <img src='/img/random-beer.png'/>
                <BeerCard beer={this.state.randomBeer} extra></BeerCard>
            </div>
        )
    }
}

export default RandomBeer