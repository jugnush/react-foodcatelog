import React from 'react';
import AddFishForm from './addFishForm';

class Inventory extends React.Component{

	render(){
			return (
				<div>	
					<h2>Inventroy</h2>
					<AddFishForm funcAddProduct = {this.props.funcAddProduct}/>
					<button type="loadSample" onClick={this.props.loadSample}>load Sample</button>
				</div>
			)
	}
}

export default Inventory;