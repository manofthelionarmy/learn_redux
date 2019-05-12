import React from 'react';

// import HobbiesForm from './HobbiesForm';
// import HobbiesList from './HobbiesList'; 
import ViewHobbies from '../containers/ViewHobbies'; 


class Hobbies extends React.Component {

    render() {
        return (
            <React.Fragment>
                {/*
                    Don't render this. It works, but we don't want it in the final version of our UI :)
                    <HobbiesForm 
                        add={this.add}
                    />
                */}
                <ViewHobbies />
                
            </React.Fragment>
        )
    }
}

export default Hobbies; 