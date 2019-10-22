import React, { Component } from 'react';
import '../assets/styles/scss/ResultCard.scss';
import Popup from '../components/Popup';
import Carousel from './Carousel';

import format from'date-fns/format';
class ResultCard extends Component { 
    constructor(props){
        super();
        this.showPopup = this.showPopup.bind(this);
        this.state={
            selected:null,
            openPopup:false,
        }
        this.handlePopup = this.handlePopup.bind(this);
    }
    handlePopup(){
        this.setState({openPopup:false});
        this.props.action();
    }
    showPopup(){
        if(this.state.openPopup){
            return <Popup action={this.handlePopup} product={this.state.selected}/>
        }
    }
    render(){
        let allProducts = this.props.products;
        const listOfItems = allProducts.map((item) => {
            return <li className="result-card" id={item._id} key={item._id} onClick={() => this.setState({selected:item,openPopup:true})}>
                        <div className="result-header">
                            {/* <Carousel imagePayload={item.images}/> */}
                            <span>{item.name}</span>
                        </div>
                        <div className="result-content">
                            <span>{item.description}</span>
                        </div>
                        <div className="result-footer">
                            <span>{item.createdBy} on : </span>
                            <span>{format(item.timestamp,'DD, MMMM YYYY')}</span>
                        </div>
                    </li>
        })

        return(
            <div className="result-wrapper">
                <ul className="result-container">
                    {listOfItems}
                    {this.showPopup()}
                </ul>
            </div>
        )
    }
}

export default ResultCard;