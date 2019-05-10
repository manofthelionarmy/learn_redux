import React from 'react';
import '../assets/css/HobbiesForm.css';

class HobbiesForm extends React.Component {

    // I have a controlled component, meaning it's input values update
    // based upon HobbiesForm own state 
    // I have HobbiesForm embedded in Hobbies, because Hobbies state will be the
    // single source of truth for this hobbies module. 
    // Meaning, if I want to update the state in Hobbies, I need to pass Hobbies.handleForm
    // as a property to HobbiesForm. However, the state of HobbiesForm is out of scope from Hobbies
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            hobby: ''
        }

        this.onChange = this.onChange.bind(this); 

        this.onSubmit = this.onSubmit.bind(this);

        this.reset = this.reset.bind(this);
    }

    /**
    * onChange will allow the input to detect typing an update the value in real time
    */
    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
       
    }

    onSubmit(e) {

        // 1st call the handleForm function passed as property from Hobbies
        // Doing this will allow it to update the hobbies, becuase Hobbies component holds a hobbies array as a single source of truth

        // In the component, we'll handle such things:
        // 1. Prevent the default behavior
        // 2. Get the values from the input
        // 3. Call add function passed as a property from Hobbies
        // 4. Handle the reset of the form input fields in this component
        e.preventDefault(); 

        /**
         * Both of these work:
         * 
         * const h = {
         *  name: e.target.name.value,
         *  hobby: e.target.hobby.value
         * }
         */

        const h = {
            name: this.state.name,
            hobby: this.state.hobby 
        }

        this.props.add(h); 

        this.reset(); 
    }

    reset() {
        // This resets the form
        this.setState({
            name: '',
            hobby: ''
        }); 
    }
 
    render() {
        return (
            <div>
                <div className="card">
                    <form onSubmit={this.onSubmit}>
                        
                        <label>Name</label>
                        <br />
                        <input type="text" name="name" value={this.state.name} placeholder="Please enter your Name" onChange={this.onChange}></input>
                        <br />
                        <br />

                        <label>Hobby</label>
                        <br />
                        <input type="text" name="hobby" value={this.state.hobby} placeholder="Please enter your Hobby" onChange={this.onChange}></input>

                        <br></br>
                        <br></br>
                        <hr />
                        <button type="submit">Submit</button>
                    </form>

                </div>
                
            </div>
        )
    }

}

export default HobbiesForm; 