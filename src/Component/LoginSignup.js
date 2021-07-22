import Login from "./LoginSignup/Login"
import Signup from "./LoginSignup/Signup"
import React from 'react';

class LoginSignup extends React.Component{  
    constructor(){
        super()
    } 
    render(){
        return(
            <div className="container">
                <div className="loginField">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="Login-tab" data-toggle="tab" href="#Login" role="tab" aria-controls="Login" aria-selected="true">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="Signup-tab" data-toggle="tab" href="#Signup" role="tab" aria-controls="Signup" aria-selected="false">Sign up</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="Login" role="tabpanel" aria-labelledby="Login-tab">
                            <Login />
                        </div>
                        <div class="tab-pane fade" id="Signup" role="tabpanel" aria-labelledby="Signup-tab">
                            <Signup />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default LoginSignup