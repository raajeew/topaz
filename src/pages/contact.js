import React, { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <div>
                <div className="page-banner">
                    <div className="container clients-banner">
                        <h2>Contact Us</h2>
                    </div>
                </div>
                <div className="container page-wrap">
                    <h5 style={{color:"#555"}}>Corporate Office:</h5>
                    <div>
                        <h5 style={{color:"#333"}} className="card-title">Topaz Security &amp; Multiservices</h5>
                        <p>B 31 MIDC, Waluj,<br/> Aurangabad, Maharashtra, Pin: 431136<br/>Phone: 0240 665 2444 </p>
                    </div>
                    <br/>
                    <div className="container contactus">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1987189664937!2d75.23525531448176!3d19.831542986658995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9bdcdee936f9%3A0x5cd68ceb05c3ce29!2sMetalman+Auto+Private+Limited!5e0!3m2!1sen!2sin!4v1535978195856" width="100%" height="150px" frameBorder="0" allowFullScreen></iframe>
                                    <div className="card-body">
                                        <h5 className="card-title">Aurangabad</h5>
                                        <div>Address: ....</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.144265617212!2d77.78240651437197!3d12.7040054910318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7b46dacd1af5%3A0xbfb101fde75156f0!2sMetalman+Auto+Pvt.+Ltd+%2C+Hosur!5e0!3m2!1sen!2sin!4v1535978057968" width="100%" height="150px" frameBorder="0"  allowFullScreen></iframe>
                                    <div className="card-body">
                                        <h5 className="card-title">Hosur</h5>
                                        <div>Address: ....</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Chennai</h5>
                                        <div>Address: ....</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Mysuru</h5>
                                        <div>Address: ....</div>
                                    </div>
                                </div>
                            </div>
                        </div>                                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact