import React from 'react';

//import HobbiesForm from './HobbiesForm';
import HobbiesList from './HobbiesList'; 


class Hobbies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hobbies: []
        }

        this.add = this.add.bind(this); 

        this.remove = this.remove.bind(this); 

        this.edit = this.edit.bind(this);
    }

    componentWillMount() {
        
        // Had to change the way the data is added. Using unshift will make it work like a stack so, we had to make sure we were updating the id properly
        this.setState({hobbies: [
            /*{
                id: 4,
                name: 'Armando',
                hobby: 'coding'
            },
            {
                id: 3,
                name: 'Isaiah',
                hobby: 'to play basketball'
            },
            {
                id: 2,
                name: 'Olivia',
                hobby: 'to knit'
            },
            {
                id: 1,
                name: 'Mom',
                hobby: 'cooking'
            }*/
        ]})
    }

    /// Related to HobbiesForm.js
    add(hobby) {
        
        const h = this.state.hobbies;
        
        let new_id = 0;

        if (!h[0]) {
            new_id = 1;
        } else {
            new_id = h[0].id + 1;
        }  

        h.unshift({
            id: new_id,
            name: hobby.name,
            hobby: hobby.hobby
        }); 

        this.setState({
            hobbies: [...h]
        });

    }

    // Related to HobbiesList.js
    addItem(hobby) {

        const h = this.state.hobbies; 

        // it's because the last item is always going to be 4, according to our mock data (we have 4 entries). 
        // When we add a new item, the new id is at the top of the array, because we are unshifting. So, it works like a stack
        // My mock data works like a queue, and I'm implementing unshift which will make it work like a stack 
        let new_id = 0; 
        
        if( !h[0]) {
            new_id = 1;
        } else {
            new_id = h[0].id + 1 ;
        } 
        
        
        //Doing the push should work. 
        //But it's not nice for the UI because it pushes the form to the bottom of the list
        /*h.push({
            id: new_id,
            name: hobby.name,
            hobby: hobby.hobby
        });*/
        
        h.unshift({
            id: new_id,
            name: hobby.name,
            hobby: hobby.hobby
        });  

        // This helps us by updating the id appropriateyly, but this will get messy when we remove items. 
        // Also, the id is something we don't want to modify, especially if we are using a database
        // h.map((h) => ++h.id); 

        this.setState({
            hobbies: [...h]
        }); 
    }

    edit(hobby) {
        
        // Get a copy of the state
        const h = this.state.hobbies; 

        // Search through each hobby until we find the matching id. Update the name and hobby value
        h.forEach((h) => {
            if(h.id === hobby.id) {
                h.name = hobby.name; 
                h.hobby = hobby.hobby; 
            }
        })

        // Reset the state
        this.setState({
            hobbies: [...h]
        }); 
    }

    remove(id) {

        let hobbies = this.state.hobbies; 

        // If hobbies is size 1 we remove it. Filter doesn't remove elements correctly if we have one element left
        if( hobbies.length === 1) {
            hobbies.splice(0);
        } else {
            hobbies = hobbies.filter((h) => h.id !== id);
        }
        

        this.setState({
            hobbies: [...hobbies]
        }); 
        
    }

    render() {
        return (
            <React.Fragment>
                {/*
                    Don't render this. It works, but we don't want it in the final version of our UI :)
                    <HobbiesForm 
                        add={this.add}
                    />
                */}
                <HobbiesList 
                    hobbies={this.state.hobbies}
                    remove={ (id) => this.remove(id)}
                    edit={( (hobby) => this.edit(hobby))}
                    addItem={ (hobby) => this.addItem(hobby)}
                />
            </React.Fragment>
        )
    }
}

export default Hobbies; 