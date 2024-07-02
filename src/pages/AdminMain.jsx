import React, { Component } from 'react';
import job from "../images/job.jpg";
import mail from "../images/mail.jpg";

class AdminMain extends Component {
    render() {
        return (
            <div className='whybuy'>
                <div className='brief1'>
                    <div className='brief11'>
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div className='brief12'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={job} alt="Card image cap" />
                            <div className="card-body">
                                <p class="card-text"><b>Manage Jobs</b></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='brief3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={mail} alt="Card image cap" />
                        <div className="card-body">
                            <p class="card-text"><b>Manage Mails</b></p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AdminMain;