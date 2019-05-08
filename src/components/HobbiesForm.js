import React from 'react';
import '../assets/css/HobbiesForm.css';

class HobbiesFrom extends React.Component {

    render() {
        return (
            <div>
                <div className="card">
                    <form>
                        
                        <label>Name</label>
                        <br />
                        <input type="text" placeholder="Please enter your Name"></input>
                        <br />
                        <br />

                        <label>Hobby</label>
                        <br />
                        <input type="text" placeholder="Please enter your Hobby"></input>

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

export default HobbiesFrom; 