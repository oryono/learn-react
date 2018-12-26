import React, {Component} from 'react'

class Register extends Component {
    render() {
        return(
            <div className="container">
                <form className="m-2">
                    <h3>Post Something</h3>
                    <div className="form-group"><input type="text" className="form-control"/></div>
                    <div className="form-group"><input type="text" className="form-control"/></div>
                    <div className="form-group"><input type="text" className="form-control"/></div>
                    <div className="form-group"><input type="text" className="form-control"/></div>
                    <button>Register</button>
                </form>
            </div>
        )
    }
}

export default Register