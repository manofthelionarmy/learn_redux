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

        this.addItem = this.addItem.bind(this);

        this.isListEmpty = this.isListEmpty.bind(this); 

        this.state = {
            listIsEmpty: true
        }
    }


    remove(id) {
        
        // Calling remove from Hobbies
        this.props.remove(id); 

        // call this after we remove the item
        this.isListEmpty();
    }

    edit(hobby) {
        // call the edit function in Hobbies.js and pass the hobby json object from HobbiesList.js
        this.props.edit(hobby); 
    }

    addItem(e) {
        e.preventDefault(); 

        
        // this.props.hobbies is not in sync with the updated hobbies in the state
        // it is just a copy... 
        // We need to subsribe to the change in the state .... 
        // Don't update the id here, update it where the acutal state is!! 
        // const new_id = this.props.hobbies[this.props.hobbies.length - 1].id + 1; 
        const h = {
            name: '',
            hobby: ''
        }; 

        // need to call the props
        this.props.addItem(h); 

        // call this after we add the item to hobbies in Hobbies.js
        this.isListEmpty();
    }

    isListEmpty() {

        if(this.props.hobbies.length === 0) {
            this.setState({
                listIsEmpty: true
            });
        } else {
            this.setState({
                listIsEmpty: false 
            })
        }
    }

    renderList() {
        const listItems = this.props.hobbies.map((h) => {
            return <Hobby
                key={h.id}
                _id={h.id}
                name={h.name}
                hobby={h.hobby}
                remove={() => this.remove(h.id)}
                edit={(hobby) => this.edit(hobby)}
            />
        })

        return (
            <div className="list">
                <h1>Hobby list
                    <span>
                        <button onClick={this.addItem}>
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
        return (
            <div className="list">
                <h1>Hobby list
                    <span>
                        <button onClick={this.addItem}>
                            <Add />
                        </button>
                    </span>
                </h1>
                <ul className="list-group">
                    <li className="list-item">
                        <h2>Instructions</h2>
                        <p><i>Begin by clicking the '<b>+</b>' button. Proceed by entering a name of a person and enter one of their hobbies.
                              Once you have finished entering the information, click enter to add the hobby to the list. If you wish to edit
                              the information of any hobby you added to list, click the pencil icon. If you wish to remove the item, click the
                              '<b>-</b>' button. Enjoy!
                        </i></p>
                    </li>
                </ul>
            </div>
        )
    }

    // Make sure onClick calls this.remove by passing the h.id
    
    render() {
        
        if(this.state.listIsEmpty) {
            return this.renderInstructions();
        } else {
            return this.renderList();
        }
        
    }

}

export default HobbiesList; 