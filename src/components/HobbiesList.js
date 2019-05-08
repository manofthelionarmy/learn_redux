// will display list, but will also have 3 other features: edit, add, and remove
import React from 'react';
import '../assets/css/HobbiesList.css';
import Hobby from './Hobby'

import Add from '@material-ui/icons/Add';

class HobbyList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hobbies: [
                
            ]
        }
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
        ]}); 
    }

    

    render() {
        const listItems = this.state.hobbies.map((h) => {
            return <Hobby key={h.id} name={h.name} hobby={h.hobby} />
        }) 

        return (
            <div className="list">
                <h1>Hobby list
                    <span>
                        <button>
                            <Add />
                        </button>
                    </span>
                </h1>
                 <ul className="list-group">
                  {listItems}
                </ul>
            </div>
        )
    }

}

export default HobbyList; 