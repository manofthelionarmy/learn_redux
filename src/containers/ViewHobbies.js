import {connect} from 'react-redux';
import {addItem} from '../actions/hobbyActions'; 
import HobbiesList from '../components/HobbiesList'; 

// Containers will contain the component. Presentational components just worry about rendering
// You can PLUG-IN Presnetational Components to Containers. It's not required, but it is an option :)

const mapStateToProps = state => ({
    hobbies: state.hobbies.hobbies
}); 

// map the click handler to the onclick listener in HobbiesList.js for the '+' button
const mapDispatchToProps =  dispatch => {
    return {
        addHobby: hobby => {
            dispatch(addItem(hobby)); 
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HobbiesList); 