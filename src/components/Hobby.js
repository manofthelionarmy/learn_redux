// will display a single hobby
import React from 'react';
import Edit from '@material-ui/icons/Edit';
import Remove from '@material-ui/icons/Remove';
import '../assets/css/Hobby.css';
import SubmitEditForm from '../containers/SubmitEditForm';


import EditForm from './EditForm';
import {removeItem} from '../actions/hobbyActions';
import {connect} from 'react-redux'

// This is kinda like a Presentational Component. It also has the responsiblity for toggling on and off the EditForm, and removing items
class Hobby extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showEditForm: false,
        }

        this.toggleEditForm = this.toggleEditForm.bind(this); 
        this.finishEdit = this.finishEdit.bind(this);
        // this.onChange = this.onChange.bind(this);
    }

    toggleEditForm() {
        // this will toggle the showEdit variable in state for this component
        if(this.state.showEditForm) {
            this.setState({
                showEditForm: false
            });
        } else {
            this.setState({
                showEditForm: true
            });
        }
    }

   
    finishEdit() {
            
        // Re-render once the form has been submitted 
        this.setState({
            showEditForm: false 
        });

        // Need to dispatch EDIT_ITEM action
        // this.props.edit(hobby); 
    }


    addingItem() {
        return (
            <React.Fragment>
                <li className="list-item">

                    <SubmitEditForm
                        _id={this.props._id}
                        name={this.props.name}
                        hobby={this.props.hobby}
                        finishEdit={() => this.finishEdit()}
                    />

                    <span>
                        {/**We want to render the button for consistency, but remove the onClick functionality and make it grey*/}
                        <button id="cannot-click">
                            <Edit />
                        </button>
                        <button id="remove" onClick={() => this.props.removeItem(this.props._id)}>
                            <Remove />
                        </button>
                    </span>
                </li>
            </React.Fragment>
        )
    }

    showEditForm() {
        return (
            <React.Fragment>
                <li className="list-item">

                    <SubmitEditForm 
                        _id = {this.props._id}
                        name={this.props.name}
                        hobby={this.props.hobby}
                        finishEdit = {() => this.finishEdit()}
                    />
                    
                    <span>
                        <button id="edit" onClick={() => this.toggleEditForm()}>
                            <Edit />
                        </button>
                        <button id="remove" onClick={() => this.props.removeItem(this.props._id)}>
                            <Remove />
                        </button>
                    </span>
                </li>
            </React.Fragment>
        ); 
    }

    doNotShowEditForm() {
        return (
            <React.Fragment>
                <li className="list-item">{this.props.name} likes {this.props.hobby}
                    <span>
                        <button id="edit" onClick={() => this.toggleEditForm()}>
                            <Edit />
                        </button>
                        <button id="remove" onClick={() => this.props.removeItem(this.props._id)}>
                            <Remove />
                        </button>
                    </span>
                </li>
            </React.Fragment>
        ); 
    }

    render() {

        if (this.props.name === '' && this.props.hobby === '') {
            return this.addingItem(); 
        }

        if (this.state.showEditForm) {
            return this.showEditForm();
        } else {
            return this.doNotShowEditForm();
        }
    }
}



export default connect(null, {removeItem}) (Hobby); 