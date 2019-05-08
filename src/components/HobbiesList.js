// will display list, but will also have 3 other features: edit, add, and remove
import React from 'react';
import '../assets/css/HobbiesList.css';
import Hobbies from './Hobbies'; 

import Add from '@material-ui/icons/Add';

class HobbiesList extends React.Component {

    render() {
        return (
            <div className="list">
                <h1>Hobbies list
                    <span>
                        <button>
                            <Add />
                        </button>
                    </span>
                </h1>
                 <ul className="list-group">
                    <Hobbies name="Armando" hobby="coding"/>
                    <Hobbies name="Isaiah" hobby="to play basketball"/>
                    <Hobbies name="Olivia" hobby="to knit"/>
                </ul>
            </div>
        )
    }

}

export default HobbiesList; 