import React from 'react';
import Loader from "react-loader-spinner";

class Login extends React.Component{
    constructor(){
        super()
        this.handleEmail=this.handleEmail.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
        this.state={email:"",password:"",errorMsg:"",loading:false}
    }
    handleEmail(event){
        this.setState({
            email:event.target.value
        })
    }  
    handlePassword(event){
        this.setState({
            password:event.target.value
        })
    } 
    handleLogin(e){
        e.preventDefault();
        if(this.state.email && this.state.password){
            this.setState({
                loading:true
            })
            setTimeout(()=>{
                this.setState({
                    loading:false
                })
            },1000)
        }
        else{
            this.setState({
                errorMsg:"Please Enter value"
            })
        }
    }
    render(){
        var loader
        if(this.state.loading){
            loader=<Loader 
                    type="Circles" 
                    color="#00BFFF" 
                    height={80} 
                    width={80}
                    />
        }
        else{
            loader=null;
        }
        return(
            <div>
                {loader}
                <form onSubmit={this.handleLogin}>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="Enter email" onChange={this.handleEmail} />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password" onChange={this.handlePassword} />
                    </div>
                    <span className="errorMsg">{this.state.errorMsg}</span>
                    <p>{this.state.email}</p>
                    <p>{this.state.password}</p>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login