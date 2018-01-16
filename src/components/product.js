import React from 'react';
import {formatPrice} from '../helpers.js';
class ProductsList extends React.Component{
	render(){
		const isAvailable = this.props.details.status === "available";
		const buttonText = isAvailable ? "Add to order" : "sold Out";
			return (

				 <li className="menu-fish">
				 	<img src={this.props.details.image} />
				 	<h3 className="fish-name">
				 	{this.props.details.name}
				 	<span className="price">{formatPrice(this.props.details.price)}</span>
				 	</h3>
				 	<p>{this.props.details.desc}</p>
				 	<button disabled={!isAvailable}>{buttonText}</button>
				 </li>
			)
	}
}

export default ProductsList;

