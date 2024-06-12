import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import FilterableProductTable from './FilterableProductTable';
// import App from './App.jsx'
// import './index.css'


const PRODUCTS = [
  {price: '$3.10', stocked: true, title:'Shaftoli'},
  {price: '$3.40', stocked: true, title:'Gilos'},
  {price: '$1.80', stocked: false, title:'Nok'},
  {price: '$2.00', stocked: true, title:'Sut'},
  {price: '$1.50', stocked: false, title:'Olma sharbati'},
  {price: '$0.30', stocked: true, title:'Mineral suv'}
  
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterableProductTable products = {PRODUCTS} />
  </React.StrictMode>,
)
// ReactDOM.render( <FilterableProductTable products = {PRODUCTS} />, 
// document.getElementById('root'));