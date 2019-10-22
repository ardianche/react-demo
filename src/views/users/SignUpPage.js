import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import appLogo from '../../assets/images/apps-logo.jpeg';
import '../../assets/styles/scss/SignUpPage.scss';
import PostData from '../../services/PostData';

class SignUpPage extends Component {
    constructor(){
        super();
        this.state = {
            firstName:null,
            lastName:null,
            username:null,
            password:null,
            redirect:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(identifier, event) {
        this.setState({[identifier]: event.target.value});
    }
    
    handleSubmit(event) {
        let payloadObject = {
            firstName:this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password:this.state.password,
        }
        new PostData().addUser(payloadObject).then((response)=>{
            if(response.status === 200){
                this.setState({redirect:true});
                localStorage.setItem('username',response.data.username);
                this.goToLogin();
            }
        });
        event.preventDefault();
    }
    
    goToLogin(){
        if(this.state.redirect){
            return <Redirect to='/login' />
        }
    }
    
    render(){
        return(
            <div className="login-layout">
                <div className="login-card">
                    <div className="login-header">
                        <img src={appLogo}></img>
                    </div>
                <div className="signup-content">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.firstName} onChange={(e)=>{this.handleChange('firstName',e)}} placeholder="First Name"></input>
                        <input type="text" value={this.state.lastName} placeholder="Last Name" onChange={(e)=>{this.handleChange('lastName',e)}} ></input>
                        <input type="text" value={this.state.username} placeholder="Username" onChange={(e)=>{this.handleChange('username',e)}} ></input>
                        <input type="password" value={this.state.password} placeholder="Password" onChange={(e)=>{this.handleChange('password',e)}} ></input>
                        <button type="submit" style={{gridColumn:'1/3'}}>Sign Up</button>
                        {this.goToLogin()}
                    </form>
                </div>
                <div className="login-footer">
                    <span>
                        Already have an account?  
                    </span> 
                    <span>
                        Log in here.
                    </span>
                </div>
            </div>
        </div>
        );
    }
}

export default SignUpPage;