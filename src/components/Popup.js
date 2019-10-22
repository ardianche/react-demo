import React, { Component } from 'react';
import PostData from '../services/PostData';
import {Redirect} from 'react-router-dom';
import '../assets/styles/scss/Popup.scss';

class Popup extends Component{
    constructor(props){
        super(props);
        this.state = {
            product:props.product,
            redirect:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(identifier, event) {
        this.setState({product:{...this.state.product,[`${identifier}`]:event.target.value}});
        /*
           Ideally when the identifier is image then we take the file and convert it to base64
           then store that string value to our mongoDb database. 
           Due to limited time I wasn't able to implement this logic. 
        */
    }

    confirm(){
        let payloadToEdit = this.state.product;
        new PostData().editProduct(payloadToEdit).then((response)=>{
            this.setState({redirect:true});
            new PostData().getAllProducts();
            this.props.action();
        })
    }

    close(){
        this.props.action();
    }

    redirect(){
        if(this.state.redirect){
            return <Redirect to="/"></Redirect>
        }
    }

    handleSubmit(event){  
        event.preventDefault();
    }
    componentDidMount(){
        this.setState({product:this.props.product});
    }

    render(){
        return( 
            <div className="popup-wrapper" >
                <div className="popup-card">
                    <div className="popup-header">
                        Showing details for <span style={{fontWeight:600}}>{this.props.product.name}</span>
                    </div>
                    <div className="popup-content">
                    <div>
                        <span>Name</span>
                        <input value = {this.state.product.name }type="text" onChange={(e)=>{this.handleChange('name',e)}} ></input>
                    </div>
                    <div>
                        <span>description</span>
                        <input value = {this.state.product.description }type="text" onChange={(e)=>{this.handleChange('description',e)}} ></input>
                    </div>
                    <div>
                        <span>quantity</span>
                        <input value = {this.state.product.quantity }type="number" onChange={(e)=>{this.handleChange('quantity',e)}}  ></input>
                    </div>
                    <div>
                        <span>base price</span>
                        <input value = {this.state.product.basePrice }type="number" onChange={(e)=>{this.handleChange('basePrice',e)}} ></input>
                    </div>
                    <div>
                        <span>tax rate</span>
                        <input value = {this.state.product.taxRate }type="number" onChange={(e)=>{this.handleChange('taxRate',e)}}  ></input>
                    </div>
                    <div>
                        <span>sale price</span>
                        <input value = {this.state.product.salePrice }type="number" onChange={(e)=>{this.handleChange('salePrice',e)}} ></input>
                    </div>
                    <div>
                        <span>discount</span>
                        <input value = {this.state.product.discount }type="number" onChange={(e)=>{this.handleChange('discount',e)}} ></input>
                    </div>
                    {/* <div>
                        <span>images</span>
                        <input value = {this.state.product.images } type="file" onChange={(e)=>{this.handleChange('images',e)}}></input>
                    </div> */}
                    </div>
                    <div className="popup-footer">
                        <button onClick={(e)=>this.close()}>
                            Close
                        </button>
                        <button onClick={(e)=>this.confirm()}>
                            Confirm
                        </button>
                    </div>
                    {this.redirect()}
                </div>
            </div>
        )
    }
}

export default Popup;