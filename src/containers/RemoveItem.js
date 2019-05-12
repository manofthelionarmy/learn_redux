import {connect} from 'react-redux';
import Hobby from '../components/Hobby';
import {removeItem} from '../actions/hobbyActions';

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch(removeItem(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(Hobby); 