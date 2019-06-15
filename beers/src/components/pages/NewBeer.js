import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import apiBeers from '../ressources/api-beers';


class NewBeer extends React.Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        contributed_by: ''
    }

    handleChange = e => {
        console.log(e)
        const {id, value} = e.target
        console.log(id, value)
        this.setState({[id]: value})
    }

    addNewBeer = e => {
        apiBeers.addNewBeer(this.state)
        .then(res => console.log(res))
    }

    render () {
        const fields = [
            'name',
            'tagline',
            'description',
            'first_brewed',
            'brewers_tips',
            'contributed_by'
        ]

        return (
            <div>
                <h1>NewBeer</h1>
                <img src='/img/new-beer.png'/>
                <div className="beer-new-container">
                {fields.map(field => (
                    <Form.Item label={field.toLocaleUpperCase()}>
                        <Input
                        placeholder={field}
                        id={field}
                        value={this.state[field]}
                        onChange={this.handleChange}
                        />
                    </Form.Item>
                ))}
                <Button onClick={this.addNewBeer}>Ajouter</Button>
                </div>
            </div>
        )
    }
}

export default NewBeer


