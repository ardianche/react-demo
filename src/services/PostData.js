import React, { Component } from 'react';
import axios from 'axios';
import {connect} from'react-redux'

import {addProduct,getAllProducts,displayAllProducts} from '../store/actions/index';


class PostData extends Component{
    constructor(){
        super()
        this.url = 'http://localhost:8080/';
    }

    async getAllProducts(){
        return axios.get('http://localhost:8080/products').then((res)=>{
            getAllProducts(res.data);
        });
    }
    async addUser(payload) {
        payload['createdAt'] = new Date();
        console.log("PAYLOAD INSIDE ADD USER: ",payload);
        return await axios.post(this.url+'user', payload);
    }
    async logIn(payload){
        this.url += 'user/login'
        return await axios.post(this.url,payload);
    }

    async addProduct(payload){
        console.log("PAYLOAD INSIDE ADD PRODUCT: ",payload);
        this.url +="products";
        return await axios.post(this.url,payload).then(res =>{
            console.log("RES: ",res);
        })
    }

    async editProduct(payload){
        this.url +="products";
        return await axios.put(this.url,payload);
    }
}
 export default PostData;