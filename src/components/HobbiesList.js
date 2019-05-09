// will display list, but will also have 3 other features: edit, add, and remove
import React from 'react';
import '../assets/css/HobbiesList.css';
import Hobby from './Hobby'

import Add from '@material-ui/icons/Add';

class HobbiesList extends React.Component {

    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this); 
        this.edit = this.edit.bind(this); 
    }


    remove(id) {
        
        // Calling remove from Hobbies
        this.props.remove(id); 
    }

    edit(css_id) {
        // const el = document.getElementById(`item-${css_id}`);
        
    }


    // Make sure onClick calls this.remove by passing the h.id
    
    render() {
    
        const listItems = this.props.hobbies.map((h, i) => {
            ++i; 
            return <Hobby 
                        key={h.id} 
                        name={h.name} 
                        hobby={h.hobby}
                        remove={ () => this.remove(h.id)} 
                        edit={ () => this.edit(i)}
                        id = {`item-${i}`}
                    />
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

export default HobbiesList; 