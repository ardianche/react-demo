import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {addProduct,getAllProducts,displayAllProducts} from '../../store/actions/index';
import ResultCard from '../../components/ResultCard';
import AddProduct from '../products/AddProduct';
import axios from 'axios';
import fakerJs from 'faker';

import '../../assets/styles/scss/WelcomeView.scss';


const mapStateToProps = state =>{
    return{
         products: state,
         user:state.user
    }
 };
 const mapDispatchToProps = dispatch => 
     ({
         getAllProducts : (payload) => dispatch(getAllProducts(payload)),
    });

class WelcomeView extends Component{
    constructor(){
        super();
        this.state = {
            redirect : false,
            userName:null,
            addNew:false,
        }
        this.changeState = this.changeState.bind(this);
        this.retrieveChanges =this.retrieveChanges.bind(this);

    }
    changeState(){
        this.setState({addNew:!this.state.addNew});
        console.log("CHECK ",this.state);
    }
    componentDidMount = () => {
        if(this.props.user.length === 0) {
            this.setState({redirect:!this.state.addNew});
        }else{
            let username = this.props.user[0].username;
            this.setState({userName:username});
            return axios.get('http://localhost:8080/products').then((res)=>{

            /*
                Random images because I could not implement the base64 for image upload.
                Did not use it though because performance wise it sucks up a lot of cpu :( .
                B for effort? 
                
                let arrayOfImages = [];
                for(let i = 0; i < res.data.length; i++){
                    for(let j = i; j < 3; j++){
                        let imageObject = {
                            url:fakerJs.image.cats(),
                         }
                         arrayOfImages.push(imageObject);
                         res.data[i].images = arrayOfImages;
                    }
                }
            */
                this.props.getAllProducts(res.data);
            });
        }
    }
    retrieveChanges(){
        this.setState({addNew:false});
        return axios.get('http://localhost:8080/products').then((res)=>{
                this.props.getAllProducts(res.data);
            });
    }
    redirectPage(){
        if(this.state.redirect) return <Redirect to="/login"/>
    }
    content(){
        if(!this.state.addNew){
            return <ResultCard action={this.retrieveChanges} onClick={this.handleChildClick} products={this.props.products.product}></ResultCard>
        }else{
           return <AddProduct author={this.state.userName} action={this.retrieveChanges}/>
        }
    }
    handleChildClick(event){
    }
    actionBar(){
        if(this.state.addNew){
            return <div className="actionBar">
                    <button className="close" type="submit" onClick={this.changeState}>Close</button>
            </div>
        }else{
            return <div className="actionBar">
                    <button className="new" type="submit" onClick={this.changeState}>Add new</button>
            </div>
        }
    }
    render(){
        const layout = 
            <div className="layout">
                <div className="header">
                    <span>Product Managment App</span>
                    <span>{this.state.userName}</span>
                </div>
                {this.actionBar()}
                {this.redirectPage()}
                {this.content()}
            </div>;
        return (
            layout
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WelcomeView);