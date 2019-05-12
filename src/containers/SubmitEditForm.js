import {connect} from 'react-redux';
import EditForm from '../components/EditForm';
import {editItem} from '../actions/hobbyActions';

const mapDispatchToProps = dispatch => {
    return {
        editItem: hobby => {
            dispatch(editItem(hobby));
        }
    }
}

// first argument is maping state to prop
// second argument is mapping dipsatch to prop
export default connect(null, mapDispatchToProps)(EditForm); 