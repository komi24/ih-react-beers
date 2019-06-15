import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;


class BeerCardContent extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.beer.name}</h3>
                <h5>{this.props.beer.tagline}</h5>
                <div>{this.props.beer.contributed_by}</div>
            </div>
        );
    }
}

class BeerCardExtraContent extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.beer.name}</h3>
                <h5>{this.props.beer.tagline}</h5>
                <div>{this.props.beer.contributed_by}</div>
                <div>{this.props.beer.first_brewed}</div>
                <div>{this.props.beer.attenuation_level}</div>
                <div>{this.props.beer.description}</div>
                <div>{this.props.beer.contributed_by}</div>
            </div>
        );
    }
}

class BeerCard extends Component {
    render() {
        return (
            <div style={{margin: '5px 3px'}}>
                <Card
                    hoverable
                    style={{ width: 240, height: '100%' }}
                    cover={<img alt={this.props.beer.name} style={{height: 180, width: 'auto', margin: 'auto'}} src={this.props.beer.image_url} />}
                >
                    {
                        this.props.extra ? 
                        <BeerCardExtraContent beer={this.props.beer}/> :
                        <BeerCardContent beer={this.props.beer}/>
                    }
                </Card>                
            </div>
        );
    }
}

export default BeerCard;


