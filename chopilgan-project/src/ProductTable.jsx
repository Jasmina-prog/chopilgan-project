import React, { Component } from 'react'
import ProductRow from './ProductRow';

class SearchBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = []
        this.props.products.forEach((product, index) => {
            if(product.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
                return;
            }
            if(inStockOnly && !product.stocked){
                return;
            }
            rows.push(<ProductRow product = {product} key = {index}/>);
        });
        return(
            <table>
                <thead>
                    <tr>
                        <th align="left">Nomi</th>
                        <th align="left">Narxi</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

export default SearchBar
