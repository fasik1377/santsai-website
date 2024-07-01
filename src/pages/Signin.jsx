import React, { Component } from 'react';

class Signin extends Component {
    render() {
        return (
            <div className='sign_body'>
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
                        <input
                            type="submit"
                            value="LOGIN"
                            className="sign_btn"

                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Signin;