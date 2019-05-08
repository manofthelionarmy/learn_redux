// will display a single hobby
import React from 'react';
import Edit from '@material-ui/icons/Edit';
import Remove from '@material-ui/icons/Remove';

class Hobbies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            hobby: ""
        }
    }
    
    render() {

        

        return (
            <React.Fragment>
                <li className="list-item">{this.props.name} likes {this.props.hobby}
                    <span>
                        <button>
                            <Edit />
                        </button>
                        <button>
                            <Remove />
                        </button>
                    </span>
                </li>
            </React.Fragment>
        );
    }
}

export default Hobbies; 