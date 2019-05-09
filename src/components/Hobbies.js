import React from 'react';

import HobbiesForm from './HobbiesForm';
import HobbiesList from './HobbiesList'; 


class Hobbies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hobbies: []
        }

        this.add = this.add.bind(this); 

        this.remove = this.remove.bind(this); 
    }

    componentWillMount() {
        this.setState({hobbies: [
            {
                id: 1,
                name: 'Armando',
                hobby: 'coding'
            },
            {
                id: 2,
                name: 'Isaiah',
                hobby: 'to play basketball'
            },
            {
                id: 3,
                name: 'Olivia',
                hobby: 'to knit'
            },
            {
                id: 4,
                name: 'Mom',
                hobby: 'cooking'
            }
        ]})
    }

    add(hobby) {
        
        const h = this.state.hobbies;
        
        let new_id = (h[h.length - 1].id) + 1; 

        h.push({
            id: new_id,
            name: hobby.name,
            hobby: hobby.hobby
        }); 

        this.setState({
            hobbies: [...h]
        });

    }

    remove(id) {

        let hobbies = this.state.hobbies; 

        hobbies = hobbies.filter((h) => h.id !== id);

        this.setState({
            hobbies: [...hobbies]
        }); 
        
    }

    render() {
        return (
            <React.Fragment>
                <HobbiesForm 
                    add={this.add}
                />
                <HobbiesList 
                    hobbies={this.state.hobbies}
                    remove={ (id) => this.remove(id)}
                />
            </React.Fragment>
        )
    }
}

export default Hobbies; 