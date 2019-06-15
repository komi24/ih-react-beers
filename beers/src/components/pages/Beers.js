import React from 'react';
import ApiBeer from '../ressources/api-beers';
import Loader from '../utils/Loader';
import BeerCard from '../utils/BeerCard';


class Beers extends React.Component {
    state = {
        beers: [],
        loader: true
    }

    componentDidMount() {
        ApiBeer.getBeers()
        .then(beers => {
            console.log(beers)
            this.setState({beers: beers.slice(0,10), loader:false})
        })
    }

    render () {
        return (
            <div>
                <h1>Beers</h1>
                <img src='/img/beers.png'/>
                <div className="beers-container">
                    {this.state.loader ? 
                    <Loader></Loader> : 
                    this.state.beers.map(beer => (<BeerCard beer={beer}></BeerCard>))}
                </div>
            </div>
        )
    }
}

export default Beers