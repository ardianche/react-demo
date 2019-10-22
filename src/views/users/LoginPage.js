import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import PostData from '../../services/PostData';
import {addUser} from '../../store/actions/index';
import {connect} from 'react-redux';
import '../../assets/styles/scss/LoginPage.scss';
import appLogo from '../../assets/images/apps-logo.jpeg'


const mapStateToProps = state =>{
    return{
         products: state,
    }
};

const mapDispatchToProps = dispatch => ({
    addUser: (payload) => dispatch(addUser(payload)),
});

class LoginPage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: !!localStorage.getItem('username') && localStorage.getItem('username') || "",
            password: '',
            redirect:false,
            homepage:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(identifier, event) {
        this.setState({[identifier]: event.target.value});
    }
    
    handleSubmit(event) {
        let payloadObject = {
            username: this.state.username,
            password:this.state.password,
        }
        new PostData().logIn(payloadObject).then((response)=>{
                this.props.addUser(response.data);
                this.setState({homepage:true});
        }).catch((err)=>{
        });
        event.preventDefault();
    }

    handleClick = () => {
        this.setState({redirect:true});
    }
    goToSignUp(){
        if (this.state.redirect) {
            this.state.redirect = false;
            return <Redirect to='/sign-up' />
        }
        if(this.state.homepage){
            return <Redirect to='/'/>
        }
    }
    render(){

        return(
            <div className="login-layout">
                <div className="login-card">
                    <div className="login-header">
                        <img src={appLogo}></img>
                    </div>
                    <div className="login-content">
                        <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.username} placeholder="Username" onChange={(e)=>{this.handleChange('username',e)}} ></input>
                        <input type="password" value={this.state.password} placeholder="Password" onChange={(e)=>{this.handleChange('password',e)}} ></input>
                        <button type="submit">Log In</button>
                        </form>
                    </div>
                    <div className="login-footer">
                        <span>
                            Don't have an account?  
                        </span> 
                        {this.goToSignUp()}
                        <a onClick={this.handleClick}> Sign up here</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);