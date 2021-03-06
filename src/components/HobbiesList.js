import React from 'react';
import '../assets/css/HobbiesList.css';
import RemoveItem from '../containers/RemoveItem';

import Add from '@material-ui/icons/Add';

// import {connect} from 'react-redux';

// import { addItem } from '../actions/hobbyActions';

/**This is a presenter. Therefore, this will only present the list. 
 * The '+' button is part of this component, so we'll keep addItem function
*/

class HobbiesList extends React.Component {

    constructor(props) {
        super(props);

        this.isListEmpty = this.isListEmpty.bind(this); 
    }

    isListEmpty() {

        return this.props.hobbies.length === 0; 
    }

    renderList() {
        
        const listItems = this.props.hobbies.map((h) => {
            return <RemoveItem
                key={h.id}
                _id={h.id}
                name={h.name}
                hobby={h.hobby}
            />
        })

        const star = `\u{2B50}`;

        return (
            <div className="list">
                <h1>{star}Hobby list{star}
                    <span>
                        <button onClick={() => this.props.addHobby({
                            name: '',
                            hobby: ''
                        })}>
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

    renderInstructions() {

        const star = `\u{2B50}`;
        
        return (
            <div className="list">
                <h1>{star}Hobby list{star}
                    <span>
                        <button onClick={() => this.props.addHobby({
                            name: '',
                            hobby: ''
                        })}>
                            <Add />
                        </button>
                    </span>
                </h1>
                <ul className="list-group">
                    <li className="list-item" id="instructions">
                        <h2>Instructions:</h2>
                        <p><i>Begin by clicking the '<b>+</b>' button. Proceed by entering a name of a person and enter one of their hobbies.
                              Once you have finished entering the information, click enter to add the hobby to the list. If you wish to edit
                              the information of any hobby you added to the list, click the pencil icon. If you wish to remove the item, click the
                              '<b>-</b>' button. Enjoy!
                        </i></p>
                    </li>
                </ul>
            </div>
        )
    }

    // Make sure onClick calls this.remove by passing the h.id
    
    render() {
        
        if(this.isListEmpty()) {
            return this.renderInstructions();
        } else {
            return this.renderList();
        }
        
    }

}

export default HobbiesList; 