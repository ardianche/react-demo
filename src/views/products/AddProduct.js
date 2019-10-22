import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../assets/styles/scss/AddProduct.scss';
import PostData from '../../services/PostData';

class AddProduct extends Component {
    constructor(){
        super();
        this.state = {
            files:[],
            name:null,
            description:null,
            quantity:null,
            basePrice:null,
            taxRate:null,
            salePrice:null,
            discount:null,
            images:[],
            createdBy:null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fileUpload = null;

    handleChange(identifier, event) {
        this.setState({[identifier]: event.target.value});
    }

    handleSubmit(event){
        let payloadObject = this.state;
         payloadObject['createdBy'] = this.props.author;

        new PostData().addProduct(payloadObject).then((result)=>{
            this.props.action();
        });
        event.preventDefault();
    }

    render(){
        return(
            <div className="product-wrapper">
                <span>Register new product</span>
                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                    <div>
                        <span>Name</span>
                        <input value = {this.state.name }type="text" onChange={(e)=>{this.handleChange('name',e)}} ></input>
                    </div>
                    <div>
                        <span>description</span>
                        <input value = {this.state.description }type="text" onChange={(e)=>{this.handleChange('description',e)}} ></input>
                    </div>
                    <div>
                        <span>quantity</span>
                        <input value = {this.state.quantity }type="number" onChange={(e)=>{this.handleChange('quantity',e)}}  ></input>
                    </div>
                    <div>
                        <span>base price</span>
                        <input value = {this.state.basePrice }type="number" onChange={(e)=>{this.handleChange('basePrice',e)}} ></input>
                    </div>
                    <div>
                        <span>tax rate</span>
                        <input value = {this.state.taxRate }type="number" onChange={(e)=>{this.handleChange('taxRate',e)}}  ></input>
                    </div>
                    <div>
                        <span>sale price</span>
                        <input value = {this.state.salePrice }type="number" onChange={(e)=>{this.handleChange('salePrice',e)}} ></input>
                    </div>
                    <div>
                        <span>discount</span>
                        <input value = {this.state.discount }type="number" onChange={(e)=>{this.handleChange('discount',e)}} ></input>
                    </div>
                    <div>
                        <span>images</span>
                        <input value = {this.state.images } type="file" onChange={(e)=>{this.handleChange('images',e)}}></input>
                    </div>
                    <div style={{gridColumn:'1/3'}}>
                        <button type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProduct;