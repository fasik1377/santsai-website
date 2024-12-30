import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Signin extends Component {
    render() {
        return (
            <div className='sign_body'>
            <div className="under_development">
                
                    <h4 className='sign_h4'>Under Development</h4>
                    </div>
            {/* 
                <div className="login">
                
                    <h4 className='sign_h4'>Login</h4>
                    <form className='sign_form'>
                        <div className="text_area">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                defaultValue="username"
                                className="text_input"

                            />
                        </div>
                        <div className="text_area">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                defaultValue="password"
                                className="text_input"

                            />
                        </div>
                        <Button type='submit' className='btn p-8 btn_custom col-lg-5 col-md-5 col-6' component={Link} to="/adminMain">LOGIN</Button>
                    </form>
                </div>*/}
            </div>
        )
    }
}

export default Signin;