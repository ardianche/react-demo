import React, { Component } from 'react';
class Carousel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
        images:[],
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
    componentDidMount(){
        this.setState({images:this.props.images});
    }

    renderImages() {
        console.log("THIS> PROPS : ",this.props);
        if(!!this.state.images){
            // return this.state.images.forEach(item => {
            //     return <Carousel.Item>
            //         <img
            //         className="d-block w-100"
            //         src={item.url}
            //         />
            //     </Carousel.Item>
            // });
        }
   }
  
    render() {
      const { index, direction } = this.state;
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
            {this.renderImages()}
        </Carousel>
      );
    }
  }

  export default Carousel;