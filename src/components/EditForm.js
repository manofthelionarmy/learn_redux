import React from 'react';

class EditForm extends React.Component {

    constructor(props) {
        super(props);
         
        this.state = {
            id: this.props._id,
            name: this.props.name,
            hobby: this.props.hobby
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        //if we hit enter with blank items, we'll just use the initial data
        const hobby = {
            id: this.state.id,
            name: (this.state.name !== '') ? this.state.name : this.props.name,
            hobby: (this.state.hobby !== '') ? this.state.hobby : this.props.hobby
        }

        // call finishEdit in Hobby.js and pass the hobby json object
        // This is properly editing the item 
        this.props.editItem(hobby); 

        // need to singal that the form was completed
        this.props.finishEdit();
    }

    onChange(e) {

        // do not modify id. only modify the name and hobby
        this.setState({
            [e.target.name]: e.target.value
        }); 
    }


    render() {

        return (
            <React.Fragment>
                <form className="edit-form" onSubmit={this.onSubmit}>
                    <input name="name" value={this.state.name} placeholder={this.props.name ? this.props.name : 'Enter name'} onChange={this.onChange}></input>
                    {' '}likes{' '}
                    <input name="hobby" value={this.state.hobby} placeholder={this.props.hobby ? this.props.hobby : 'Enter hobby'} onChange={this.onChange}></input>
                    <button type="submit">Enter</button>
                </form>
            </React.Fragment>
        )
    }

}


export default EditForm; 