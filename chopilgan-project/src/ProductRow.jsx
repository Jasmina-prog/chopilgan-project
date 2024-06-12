import React, { Component } from 'react'



class ProductRow extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const product = this.props.product;
        return(
            <tr>
            <td>{product.title}</td>
            <td>{product.price}</td>
          </tr>
        )
    }
}

export default ProductRow