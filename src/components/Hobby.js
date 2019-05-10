// will display a single hobby
import React from 'react';
import Edit from '@material-ui/icons/Edit';
import Remove from '@material-ui/icons/Remove';
import '../assets/css/Hobby.css';

import EditForm from './EditForm';
class Hobby extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showEditForm: false,
        }

        this.edit = this.edit.bind(this); 
        this.finishEdit = this.finishEdit.bind(this);
        // this.onChange = this.onChange.bind(this);
    }

    edit() {
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

   
    finishEdit(hobby) {
            
        // Re-render once the form has been submitted 
        this.setState({
            showEditForm: false 
        });

        // Call the edit function in HobbiesList.js and pass the hobby json object passed from EditForm.js
        this.props.edit(hobby); 
    }


    addingItem() {
        return (
            <React.Fragment>
                <li className="list-item">

                    <EditForm
                        _id={this.props._id}
                        name={this.props.name}
                        hobby={this.props.hobby}
                        finishEdit={(hobby) => this.finishEdit(hobby)}
                    />

                    <span>
                        {/**We want to render the button for consistency, but remove the onClick functionality and make it grey*/}
                        <button id="cannot-click">
                            <Edit />
                        </button>
                        <button id="remove" onClick={() => this.props.remove()}>
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

                    <EditForm 
                        _id = {this.props._id}
                        name={this.props.name}
                        hobby={this.props.hobby}
                        finishEdit = {(hobby) => this.finishEdit(hobby)}
                    />
                    
                    <span>
                        <button id="edit" onClick={() => this.edit()}>
                            <Edit />
                        </button>
                        <button id="remove" onClick={() => this.props.remove()}>
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
                        <button id="edit" onClick={() => this.edit()}>
                            <Edit />
                        </button>
                        <button id="remove" onClick={() => this.props.remove()}>
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

export default Hobby; 