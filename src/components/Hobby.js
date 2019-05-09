// will display a single hobby
import React from 'react';
import Edit from '@material-ui/icons/Edit';
import Remove from '@material-ui/icons/Remove';
import '../assets/css/Hobby.css';


class Hobby extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showEditForm: false,
            name: this.props.name,
            hobby: this.props.hobby
        }

        this.edit = this.edit.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    edit() {
        // this will toggle the showEdit Form
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

    onChange(e) {

        this.setState({
            showEditForm: this.state.showEditForm,
            [e.target.name]: e.target.value
        });

    }
 
    onSubmit(e) {
        e.preventDefault();
        
        
        // TODO: modify the hobby at the source of truth
        
        this.setState({
            showEditForm: false,
            name: this.props.name,
            hobby: this.props.hobby
        });
    }

    showEditForm() {
        return (
            <React.Fragment>
                <li className="list-item">
                    <form className="edit-form" onSubmit={this.onSubmit}>
                        <input name="name" value={this.state.name} placeholder={this.props.name} onChange={this.onChange}></input>
                        likes
                        <input name="hobby" value={this.state.hobby} placeholder={this.props.hobby} onChange={this.onChange}></input>
                        <button type="submit">Enter</button>
                    </form>
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

        if (this.state.showEditForm) {
            return (this.showEditForm());
        } else {
            return (this.doNotShowEditForm());
        }
    }
}

export default Hobby; 