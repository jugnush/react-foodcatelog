import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';
import ProductsList from './product.js';
import Samples from '../sample-fishes.js';
import base from '../rebase'

console.log(ProductsList);
class App extends React.Component {
  constructor(){

    super()
    this.funcAddProduct = this.funcAddProduct.bind(this);
    this.loadSample = this.loadSample.bind(this);
    this.state={
      productS:{}
    }
  }
  componentWillMount(){
    this.ref = base.syncState(`${this.props.params.storeId}/productS`,
      {
        context:this,
        state:'productS'
      });
  }


  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  funcAddProduct(product){
    //update state
    const productS = {...this.state.productS}
    const temstamp = Date.now();

    productS[`product-${temstamp}`] = product;
    //set state
    this.setState({ productS })
  }

  loadSample(){
    //console.log('hi');
    this.setState({ 
      productS :Samples
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" sampleDeta="abc" />
          <ul className="list-of-fish">
            {
              Object.keys(this.state.productS)
              .map(key => <ProductsList key={key} details={
                this.state.productS[key]}/> )
            }
          </ul>
        </div>
       <Order />
       <Inventory funcAddProduct = {this.funcAddProduct} loadSample = {this.loadSample}/>
      </div>
    )
  }
}

export default App;
