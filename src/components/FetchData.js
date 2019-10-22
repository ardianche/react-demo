import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addAllProducts} from '../store/actions/index';

import axios from 'axios';

const mapDispatchToProps = dispatch => 
({
    addAllProducts: () => dispatch(addAllProducts())
});


class FetchData extends Component{

    constructor(){
        super();
    }

    componentDidMount(){
        return this.retrieveListOfProducts();
    }

    retrieveListOfProducts() {
        return axios.get('http://localhost:8080/test').then((res)=>{
            console.log("RES", res);
            this.props.addAllProducts(res.data);
        });
    }

    render(){
        return (
            <div></div>
        );
    }
}

export default connect(mapDispatchToProps)(FetchData);